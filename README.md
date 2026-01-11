**Step 1** - Create a React app using Vite (npm create vite@latest)

**Step 2** - Installing Tailwind CSS as a Vite plugin
    -> Install tailwindcss and @tailwindcss/vite via npm.
    -> Add the @tailwindcss/vite plugin to your Vite configuration.
    -> Add an @import to your CSS file that imports Tailwind CSS.
    -> Start using Tailwind

**Step 3** - Remove App.css and delete everything inside App.jsx and use Rafce (rafce is a VS Code snippet that auto-generates a React Arrow Function Component with Export.)(ES7+ React/Redux/React-Native snippets (install this for using rafce)).

**Step 4** - Create components folder
    -> Create a HeroSection.jsx

**Step 5** - Search "Simple Browser: Show" and click it. Then copy the localhost URL and paste it after clicking the Simple Browser: Show
    -> This is to view the localhost website inside the codespaces.

**Step 6** - Import HerSection inside App.jsx inside <div>

**Step 7** - Write useState (const [isMenuOpen, setIsMenuOpen] = useState(false);) and import useState.

**Step 8** - Write navigation array
    const navItems = [
        {name: 'Home', link: '#home'},
        {name: 'About', link: '#about'},
        {name: 'Education', link: '#education'},
        {name: 'Pricing', link: '#pricing'},
        {name: 'Services', link: '#services'},
        {name: 'Why Us', link: '#whyus'},
    ];

**Step 9** - Add tailwind CSS with div for hero section and background image of hero section and add and import image from assets folder.

**Step 10** - install "npm i lucide-react"
    -> This command installs the lucide-react icon library in your React project
    ->  1️⃣ Import an icon
        import { Menu, X, User } from "lucide-react";

        2️⃣ Use it like a component
        <Menu />
        <X />
        <User />
    -> Styling icons:
        <Menu className="w-5 h-5 text-gray-700" />
