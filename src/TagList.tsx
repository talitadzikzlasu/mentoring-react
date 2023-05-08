import { useState } from "react";
import "./taglist.css";

interface Tag {
  name: string;
  description: string;
}

const tags: Tag[] = [
  {
    name: "div",
    description: "Element blokowy służący do grupowania innych elementów HTML.",
  },
  {
    name: "span",
    description:
      "Element liniowy służący do wstawiania fragmentów tekstu lub innych elementów HTML wewnątrz bloku.",
  },
  { name: "a", description: "Element służący do tworzenia hiperłączy." },
  { name: "img", description: "Element służący do wstawiania obrazów." },
];

const TagList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTagClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tag-list">
      <h1 className="title">Lista tagów HTML</h1>
      <ul>
        {tags.map((tag, index) => (
          <li key={tag.name} className="tag">
            <div className="tag-header" onClick={() => handleTagClick(index)}>
              <h2>{tag.name}</h2>
              <span>{activeIndex === index ? "Ukryj" : "Rozwiń"}</span>
            </div>
            {activeIndex === index && (
              <div
                className={`tag-description ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {" "}
                <p>{tag.description}</p>
                <a
                  href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokaż więcej
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
