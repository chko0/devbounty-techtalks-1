export default function SEO({
  title = "TechTalks – Learn. Build. Grow. | Your programming platform",
  description = "Master real-world programming with TechTalks. Build actual projects, learn industry skills, and advance your career with our hands-on coding courses and expert mentorship.",
  keywords = "techtalks,programming in lebanon,lebanon,software engineer,programming courses,coding bootcamp,web development,software engineering,tech career,learn coding,programming skills,developer training,tech education,coding mentorship",
  category = "education",
  classification = "Education, Technology, Programming",
}) {
  return (
    <head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {category && <meta name="category" content={category} />}
      {classification && (
        <meta name="classification" content={classification} />
      )}
    </head>
  );
}
