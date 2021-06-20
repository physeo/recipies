import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import TableOfContents from "./TableOfContents";

const IndexPage = () => (
  <Layout>
    <SEO title="Table of Contents" />
    <TableOfContents />
  </Layout>
);

export default IndexPage;
