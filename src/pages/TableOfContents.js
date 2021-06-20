import React from "react";
import { categories, recipes } from "../Data/recipes";
import { Link } from "gatsby";

const TableOfContents = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Object.keys(categories).map((c, i) => (
        <div>
          <h3 style={{ textDecoration: "underline", margin: "10px" }}>
            {categories[c]}
          </h3>
          <div>
            <ul>
              {recipes
                .filter(r => r.category === categories[c])
                .map((r, i) => (
                  <li>
                    <Link
                      key={i}
                      to={`/Recipe/`}
                      state={{ recipeTitle: r.title }}
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
