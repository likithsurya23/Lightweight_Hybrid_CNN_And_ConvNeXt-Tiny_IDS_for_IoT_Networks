const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Projects/Mtech-Projects/Lightweight_Hybrid_CNN_And_ConvNeXt-Tiny_IDS_for_IoT_Networks/ids_frontend/src';
const destDir = 'd:/Projects/Mtech-Projects/Lightweight_Hybrid_CNN_And_ConvNeXt-Tiny_IDS_for_IoT_Networks/ids_frontend_next/src';

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            let content = fs.readFileSync(srcPath, 'utf8');
            
            // Add 'use client'
            if (!content.includes('"use client"') && !content.includes("'use client'")) {
                content = `"use client";\n\n` + content;
            }

            // Replace react-router-dom
            content = content.replace(/import\s+\{.*\}\s+from\s+['"]react-router-dom['"];?/g, (match) => {
                let replacements = [];
                if (match.includes('Link')) replacements.push(`import Link from 'next/link';`);
                if (match.includes('useLocation') || match.includes('useNavigate')) {
                    replacements.push(`import { usePathname, useRouter } from 'next/navigation';`);
                }
                return replacements.join('\n');
            });
            
            content = content.replace(/useLocation\(\)/g, 'usePathname()');
            content = content.replace(/useNavigate\(\)/g, 'useRouter()');

            fs.writeFileSync(destPath, content);
        }
    }
}

// Copy Components
const componentsToCopy = ['Alert', 'Metriccard', 'Header'];
componentsToCopy.forEach(c => {
    const srcPath = path.join(srcDir, 'components', c);
    if (fs.existsSync(srcPath)) {
        copyDir(srcPath, path.join(destDir, 'components', c));
    }
});

// Copy Hooks
copyDir(path.join(srcDir, 'hooks'), path.join(destDir, 'hooks'));

// Copy Pages
const pagesToCopy = ['Dashboard', 'SinglePrediction', 'BatchPrediction', 'Analytics', 'ModelInfo', 'About'];
const routeNames = {
    'Dashboard': 'dashboard',
    'SinglePrediction': 'predict',
    'BatchPrediction': 'batch',
    'Analytics': 'analytics',
    'ModelInfo': 'model-info',
    'About': 'about'
};

pagesToCopy.forEach(p => {
    const srcFile = path.join(srcDir, 'pages', p, `${p}.jsx`);
    if (fs.existsSync(srcFile)) {
        let content = fs.readFileSync(srcFile, 'utf8');
        
        if (!content.includes('"use client"') && !content.includes("'use client'")) {
            content = `"use client";\n\n` + content;
        }

        // Fix react-router-dom imports
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, imports) => {
            let replacements = [];
            if (imports.includes('Link')) replacements.push(`import Link from 'next/link';`);
            if (imports.includes('useLocation') || imports.includes('useNavigate')) {
                replacements.push(`import { usePathname, useRouter } from 'next/navigation';`);
            }
            return replacements.join('\n');
        });

        content = content.replace(/useLocation\(\)/g, 'usePathname()');
        content = content.replace(/useNavigate\(\)/g, 'useRouter()');
        
        // Remove .jsx extension for Next.js imports if any (rare but safe)
        // content = content.replace(/\.jsx/g, '');

        const routeDir = path.join(destDir, 'app', routeNames[p]);
        if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
        
        fs.writeFileSync(path.join(routeDir, 'page.jsx'), content);
    }
});

console.log('Migration complete');
