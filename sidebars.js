const sidebars = {
  tev2SideBar: [
    { type: 'category',
      label: 'TEv2 Overview',
      link: {type: 'doc', id: 'tev2-overview'},
      items: [
        { type: 'autogenerated', dirName: 'overview' },
        { type: 'doc', label: 'Terminology Support', id: 'terms/patterns/pattern-terminology'},
      ]
    },
    { type: 'category',
      label: 'Manuals',
      link: {type: 'doc', id: 'manuals/man-overview'},
      items:
      [ { type: 'category',
        label: 'Authors',
        link: {type: 'doc', id: 'manuals/author/author-overview'},
        items: [ { type: 'autogenerated', dirName: 'manuals/author' } ]
        },
        { type: 'category',
        label: 'Curators',
        link: {type: 'doc', id: 'manuals/curator/curator-overview'},
        items: [ { type: 'autogenerated', dirName: 'manuals/curator' } ]
        },
        { type: 'category',
        label: 'Contributors',
        link: {type: 'doc', id: 'manuals/contributor/contributor-overview'},
        items: [ { type: 'autogenerated', dirName: 'manuals/contributor' } ]
        },
      ],
    },
    { type: 'category',
      label: 'Files (Structure, Specs)',
      link: {type: 'doc', id: 'tev2-spec-files'},
      items: [ { type: 'autogenerated', dirName: 'spec-files' } ]
    },
    { type: 'category',
      label: 'Syntax (Specs)',
      link: {type: 'doc', id: 'tev2-syntax'},
      items:
      [ { type: 'autogenerated', dirName: 'spec-syntax' },
        { type: 'doc', id: 'spec-tools/terminology-construction', label: 'MRG Selection Criteria'},
      ]
    },
    { type: 'category',
      label: 'The Toolbox (specs)',
      link: {type: 'doc', id: 'tev2-toolbox'},
      items: [ { type: 'autogenerated', dirName: 'spec-tools' } ]
    },
    { type: 'category',
      label: 'TEv2 Glossary',
      link: {type: 'doc', id: 'tev2-glossary'},
      items: [ { type: 'autogenerated', dirName: 'terms' } ]
    },
    { type: 'category',
      label: 'Miscellanous',
      items: [ { type: 'autogenerated', dirName: 'miscellaneous' } ]
    },
  ],
};

module.exports = sidebars;
