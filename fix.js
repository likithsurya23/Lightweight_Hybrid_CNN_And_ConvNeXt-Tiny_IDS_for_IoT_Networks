const fs = require('fs');
let c = fs.readFileSync('ids_frontend/src/pages/ModelInfo/ModelInfo.jsx', 'utf8');
c = '"use client";\n\n' + c;
c = c.replace(/bg-opacity-\d+/g, 'opacity-80');
c = c.replace(/import\s+\{[^}]+\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';\nimport { useRouter, usePathname } from 'next/navigation';");
fs.writeFileSync('ids_frontend_next/src/app/model-info/page.js', c);
