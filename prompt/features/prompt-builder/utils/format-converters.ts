import { PromptSection } from "../types";

export function prettifyText(text: string): string {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n\n');
}

export function convertToXML(sections: PromptSection[]): string {
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<prompt>
  ${sortedSections.map(section => `
  <section type="${section.type}">
    <content>${section.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')}
    </content>
  </section>`).join('')}
</prompt>`;
}

export function convertToMDX(sections: PromptSection[]): string {
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);
  
  return sortedSections.map(section => `
# ${section.type.charAt(0).toUpperCase() + section.type.slice(1)}

\`\`\`prompt
${section.content}
\`\`\`
`).join('\n');
}