import { NextRequest, NextResponse } from "next/server";

const GEMINI_URL_BASE = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

const SYSTEM_PROMPT = `You are Sigma, the intelligent AI assistant for Sigmatronics Innovation Private Limited.
You help visitors learn about the company, its products, services, and capabilities.
Always be concise, helpful, professional, and friendly.
Only answer questions related to Sigmatronics and its offerings. For unrelated topics, politely redirect the user.

Here is the complete knowledge base about Sigmatronics:

COMPANY OVERVIEW:
Sigmatronics Innovation Private Limited is a multi-vertical technology company focused on hardware engineering, embedded systems, IoT solutions, software platforms, industrial automation, smart solutions, consultancy, and technology learning initiatives.
Tagline: "From Hardware to Cloud — Building Intelligent Solutions for the Real World."
Mission: To build intelligent, scalable, and practical technology systems for real-world applications.
Vision: To become a globally respected engineering and innovation-driven technology company.
Location: Nagpur, Maharashtra, India.

CORE DOMAINS:
- Embedded Systems (STM32, ESP32, ARM, AVR)
- IoT Solutions
- Industrial Automation
- Smart Hardware
- Software Platforms
- Cloud Dashboards
- Smart Monitoring Systems
- Product Development
- Consultancy
- Industry Learning Programs

HARDWARE CAPABILITIES:
- PCB Design (single, double, multi-layer)
- Industrial IoT Hardware (telemetry, remote monitoring, edge computing)
- Smart Vending Hardware (QR payments, inventory monitoring)
- Water Automation Hardware (smart filling, valve automation, tank monitoring)
- Solar & Energy Hardware (inverters, charge controllers, battery management, energy monitoring)
- Industrial Automation Hardware (relay control, PLC interfacing, motor control)
- Home Automation Hardware (smart switches, Wi-Fi automation)

UNIVERSAL IOT GATEWAY:
Proprietary gateway supporting 2G, 4G, Wi-Fi, MQTT, HTTP/HTTPS, remote telemetry, cloud integration, real-time monitoring, edge processing, and secure communication.

SOFTWARE SERVICES:
- Custom software & web development
- IoT dashboards & admin panels
- SaaS & analytics platforms
- Cloud backend & API integrations

SOFTWARE PLATFORMS:
- VendMonitor: Smart vending monitoring with remote monitoring, inventory tracking, sales analytics
- NodeQue: Digital queue and customer flow management
- MetaPlugs: AI and emerging technology platform
- JivanSecure: Financial awareness digital platform

SOLUTIONS:
- Smart Vending (QR payment, cloud-connected)
- Water Automation (tanker automation, smart valve)
- Industrial IoT (machine monitoring, predictive monitoring)
- Energy Monitoring (solar analytics, utility dashboards)

CONSULTANCY:
Hardware, embedded systems, IoT, software, website, product development, and automation consultancy.

LEARNINGS / INTERNSHIPS:
Internships, live projects, embedded systems training, IoT learning, full-stack development, and product development learning.

INDUSTRIES SERVED:
Industrial automation, smart retail, utilities, renewable energy, manufacturing, smart infrastructure, educational institutions, technology startups.

CONTACT:
Company: Sigmatronics Innovation Private Limited
Location: Nagpur, Maharashtra, India
Website: sigmatronics.ai`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing environment variable GEMINI_API_KEY");
      return NextResponse.json(
        { error: "Chat service is not configured" },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { messages } = body as {
      messages: Array<{ role: "user" | "model"; text: string }>;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    // Filter out any messages with empty text to avoid INVALID_ARGUMENT from Gemini
    const validMessages = messages.filter((m) => m.text && m.text.trim().length > 0);
    if (validMessages.length === 0) {
      return NextResponse.json({ error: "No valid messages" }, { status: 400 });
    }

    const contents = validMessages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text.trim() }],
    }));

    const geminiBody = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
      },
    };

    const response = await fetch(`${GEMINI_URL_BASE}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      return NextResponse.json(
        { error: `Gemini API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const replyText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply: replyText });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
