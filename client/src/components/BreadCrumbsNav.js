import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const BreadCrumbsNav = () => (
  <div className="bread-crumb-nav">
    <Breadcrumbs aria-label="Breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>

      <Link color="inherit" href="/searchresults">
        Search Results
      </Link>

      <Link color="inherit" href="/article">
        Article
      </Link>
    </Breadcrumbs>
  </div>
);

export default BreadCrumbsNav;
