'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Radio, 
  ShoppingCart, 
  Droplets, 
  Zap, 
  Settings, 
  Home, 
  Leaf, 
  MapPin, 
  Network, 
  Lock, 
  Cloud, 
  RefreshCw, 
  Activity, 
  Share2, 
  Maximize,
  Bot,
  Wrench,
  Ruler,
  Car,
  Snowflake,
  Sprout,
  School,
  Hospital,
  Monitor,
  Truck,
  Factory,
  ShoppingBag,
  Star
} from "lucide-react";

const capabilities = [
  {
    title: "Custom Embedded Hardware Design",
    icon: Cpu,
    color: "from-blue-50 to-cyan-50 border-blue-100",
    accent: "text-blue-700 bg-blue-100",
    items: ["MCU/MPU based product design", "ESP32, STM32, AVR, ARM-based systems", "Custom PCB design (single to multi-layer)", "Sensor integration & signal conditioning", "Communication interface integration", "Industrial-grade control logic", "Power-efficient embedded architecture", "Prototyping to production support"],
  },
  {
    title: "Industrial IoT Hardware",
    icon: Radio,
    color: "from-cyan-50 to-teal-50 border-cyan-100",
    accent: "text-cyan-700 bg-cyan-100",
    items: ["Remote telemetry units", "Edge data acquisition devices", "Sensor aggregation controllers", "Machine health monitoring devices", "Asset tracking hardware", "Environment & process monitoring systems", "Multi-protocol industrial gateways", "Secure field-deployable IoT nodes"],
  },
  {
    title: "Smart Vending & Dispensing Hardware",
    icon: ShoppingCart,
    color: "from-blue-50 to-blue-50 border-blue-100",
    accent: "text-blue-700 bg-blue-100",
    items: ["Multi-product vending machine controllers", "QR-based payment integrated vending hardware", "Coin / note acceptor integration", "Motor driver & dispensing logic PCBs", "Touch display UI hardware", "Remote inventory monitoring electronics", "Cloud-connected vending device controllers", "Beverage / liquid dispensing control systems"],
  },
  {
    title: "Water Automation & Utility Hardware",
    icon: Droplets,
    color: "from-sky-50 to-blue-50 border-sky-100",
    accent: "text-sky-700 bg-sky-100",
    items: ["Automated water tanker filling systems", "Valve automation controllers", "Flow meter interface boards", "Pump control panels", "Tank level monitoring units", "Remote water distribution monitoring devices", "Borewell / overhead tank automation", "Water metering and billing enablement systems"],
  },
  {
    title: "Solar & Power Electronics",
    icon: Zap,
    color: "from-amber-50 to-yellow-50 border-amber-100",
    accent: "text-amber-700 bg-amber-100",
    items: ["Solar inverter controller systems", "Solar charge controllers", "Battery management support electronics", "Power monitoring modules", "AC/DC conversion monitoring hardware", "Energy analytics interfaces", "Load management controllers", "Hybrid power control systems"],
  },
  {
    title: "Industrial Electrical Automation",
    icon: Settings,
    color: "from-slate-50 to-gray-50 border-slate-100",
    accent: "text-slate-700 bg-slate-100",
    items: ["PLC-interfacing control panels", "Relay & contactor control logic boards", "Industrial motor control systems", "Machine automation panels", "Safety interlock hardware", "Remote machine control units", "Digital I/O expansion hardware", "Electrical control cabinet electronics"],
  },
  {
    title: "Home & Building Automation",
    icon: Home,
    color: "from-emerald-50 to-green-50 border-emerald-100",
    accent: "text-emerald-700 bg-emerald-100",
    items: ["Smart switch controllers", "Wi-Fi enabled relay systems", "Remote appliance control modules", "Energy monitoring devices", "Security sensor integration hardware", "Smart access control systems", "Occupancy & environmental automation", "Residential IoT control systems"],
  },
  {
    title: "Environmental & Waste Management",
    icon: Leaf,
    color: "from-green-50 to-lime-50 border-green-100",
    accent: "text-green-700 bg-green-100",
    items: ["Incinerator control systems", "Temperature-controlled process hardware", "Safety sensor monitoring systems", "Emission/process monitoring interface units", "Waste handling automation control boards", "Remote operation and diagnostics electronics"],
  },
  {
    title: "Specialized Monitoring Devices",
    icon: MapPin,
    color: "from-rose-50 to-pink-50 border-rose-100",
    accent: "text-rose-700 bg-rose-100",
    items: ["Temperature + GPS tracking devices", "BLE-enabled sensor nodes", "GSM-enabled telemetry devices", "Battery-backed remote monitors", "Location + condition monitoring units", "Cold-chain / logistics monitoring hardware", "Portable industrial diagnostic devices"],
  },
];

const gatewayFeatures = [
  { icon: Network, label: "Multi-Network", desc: "2G / 4G / Wi-Fi connectivity" },
  { icon: Lock, label: "Secure Comms", desc: "Encrypted telemetry transmission" },
  { icon: Cloud, label: "Cloud API", desc: "Full cloud platform compatibility" },
  { icon: Zap, label: "Edge Processing", desc: "On-device compute capability" },
  { icon: RefreshCw, label: "OTA-Ready", desc: "Over-the-air firmware updates" },
  { icon: Activity, label: "Real-Time Health", desc: "Device diagnostics & reporting" },
  { icon: Share2, label: "Multi-Protocol", desc: "MQTT, Modbus, RS485, CAN" },
  { icon: Maximize, label: "Scalable", desc: "Pilot to enterprise deployment" },
];

const protocols = ["TCP/IP", "MQTT", "HTTP/HTTPS", "Modbus", "CAN-based integration", "UART / RS232 / RS485", "GPIO / Relay control", "Analog / Digital input", "Sensor bus integrations", "Edge rule execution"];

const useCases = ["Smart vending machines", "Utility metering systems", "Water infrastructure automation", "Energy monitoring systems", "Remote asset control", "Industrial process telemetry", "Machine performance monitoring", "Fuel level & genset monitoring", "Smart kiosks & unattended retail", "Environmental compliance systems", "Building automation", "Fleet / mobile asset devices", "Distributed sensor networks"];

const futureCapabilities = [
  { icon: Bot, label: "Edge AI-enabled IoT controllers" },
  { icon: Wrench, label: "Predictive maintenance sensor hubs" },
  { icon: Ruler, label: "Smart utility metering devices" },
  { icon: Car, label: "Connected EV infrastructure controllers" },
  { icon: Snowflake, label: "Cold-chain compliance devices" },
  { icon: Sprout, label: "Smart agriculture automation nodes" },
  { icon: School, label: "Smart campus / building control units" },
  { icon: Hospital, label: "Health & wellness monitoring terminals" },
  { icon: Monitor, label: "Digital kiosk hardware systems" },
  { icon: Truck, label: "Smart logistics monitoring hardware" },
  { icon: Factory, label: "Industrial retrofit kits for legacy machines" },
  { icon: ShoppingBag, label: "Smart retail shelf & inventory devices" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HardwarePage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1,1.2,1], x:[0,80,0] }} transition={{ duration: 20, repeat: Infinity, ease:"easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2,1,1.2], x:[0,-60,0] }} transition={{ duration: 25, repeat: Infinity, ease:"easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/60 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                🔬 Sigmatronics Hardware
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Advanced <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Embedded Systems</span> & Connected Device Engineering
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                From concept to deployment, Sigmatronics Hardware designs intelligent, robust, and scalable electronic systems for industrial, commercial, and emerging technology applications.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#capabilities" className="rounded-full bg-blue-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-800">
                  Explore Capabilities
                </a>
                <a href="#contact" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                  Start a Hardware Project
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8, delay:0.2 }} className="grid gap-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Embedded hardware" width={800} height={400} className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="PCB design" width={400} height={200} className="h-32 w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="IoT devices" width={400} height={200} className="h-32 w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </div>
            </motion.div>
          </div>
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-3">
            {["Industrial Grade", "IoT Ready", "Edge AI", "Cloud Connected", "OTA Updates", "Multi-Protocol"].map(badge => (
              <span key={badge} className="rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">{badge}</span>
            ))}
          </div>
        </section>

        {/* INTRO CARD */}
        <motion.section initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-16 overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Engineering Backbone</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
                The Foundation of Sigmatronics Innovation
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Sigmatronics Hardware is built on deep expertise in embedded systems, control electronics, communication modules, and industrial interfaces. We design custom hardware that is field-ready, reliable, and future scalable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Our capabilities span smart dispensing, industrial automation, power electronics, IoT gateways, remote monitoring, water systems, smart energy, and next-generation connected infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v:"9+", l:"Hardware Domains" }, { v:"500+", l:"Devices Deployed" }, { v:"PCB→Cloud", l:"Full Stack Hardware" }, { v:"OEM/ODM", l:"Manufacturing Support" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                  <p className="text-3xl font-black text-white">{s.v}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CORE CAPABILITIES */}
        <section id="capabilities" className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Build</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Core Hardware Capabilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Nine specialized domains — each engineered for reliability, scalability, and real-world deployment.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={cardVariants} whileHover={{ y:-6, boxShadow:"0 20px 60px rgba(0,0,0,0.1)" }} className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-7 transition-all ${cap.color}`}>
                <div className="flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${cap.accent}`}>
                    <cap.icon size={24} strokeWidth={2.5} />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {cap.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SIGNATURE PRODUCT */}
        <section id="signature" className="mt-24">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="overflow-hidden rounded-[40px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-10 shadow-2xl lg:p-14">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-100 px-5 py-2 text-sm font-bold text-cyan-800">
                ⭐ Signature Proprietary Product
              </span>
              <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">Sigmatronics Universal<br /><span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">IoT Gateway Controller</span></h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                At the heart of many Sigmatronics solutions — a highly adaptable communication and control platform engineered to connect machines, sensors, industrial assets, and field devices to cloud systems securely and efficiently.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="IoT Gateway Controller" width={1400} height={500} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gatewayFeatures.map(f => (
                <motion.div key={f.label} variants={cardVariants} whileHover={{ y:-4 }} className="rounded-2xl border border-white bg-white p-6 text-center shadow-lg transition-all">
                  <div className="flex justify-center text-blue-600">
                    <f.icon size={32} strokeWidth={2} />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{f.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Protocol & Interface Support</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {protocols.map(p => (
                    <span key={p} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">{p}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Use Cases</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {useCases.map(u => (
                    <span key={u} className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">{u}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FUTURE-READY */}
        <section className="mt-24">
          <div className="overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Next-Generation</p>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Future-Ready Hardware Capabilities</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Sigmatronics continues to design and explore advanced hardware for emerging sectors — from Edge AI to smart agriculture, EV infrastructure, and beyond.
              </p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {futureCapabilities.map(f => (
                <motion.div key={f.label} variants={cardVariants} whileHover={{ y:-5, backgroundColor:"rgba(255,255,255,0.08)" }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all">
                  <f.icon size={24} className="text-blue-300" strokeWidth={2} />
                  <span className="text-sm font-medium text-slate-200">{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section id="contact" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 to-cyan-600 p-12 text-white shadow-2xl shadow-blue-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100">Need Custom Hardware?</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">From PCB to Production-Ready,<br />Cloud-Connected Field Devices.</h2>
              <p className="mt-5 text-lg text-blue-100">Sigmatronics Hardware can help you build reliable and scalable technology products for industrial, commercial, and emerging applications.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Start Your Hardware Project</p>
              <p className="text-sm text-blue-100">Engage with our engineering team to design, prototype, and deploy your next-generation hardware product.</p>
              <a href="mailto:hello@sigmatronics.ai" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:bg-blue-50">
                Contact Engineering Team →
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
