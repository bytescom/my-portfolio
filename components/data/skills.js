export const getCategoryColors = (category) => {
  const colors = {
    Languages: "from-blue-500 to-cyan-500",
    Frameworks: "from-purple-500 to-pink-500",
    Databases: "from-green-500 to-emerald-500",
    Tools: "from-orange-500 to-red-500"
  };
  return colors[category] || colors.Languages;
};

export const skills = [
  { category: "Languages", skills: ["C++", "JavaScript", "Python", "HTML", "CSS"] },
  { category: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"] },
  { category: "Databases", skills: ["MongoDB", "SQL", "AWS (basic)", "Supabase"] },
  { category: "Tools", skills: ["Git", "Figma", "VS Code", "GitHub", "Excel"] }
];