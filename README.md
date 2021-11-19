- **`[v.0.1.x:next]`**: Recode AB output. Normalize package.
- **`[v.0.x.0:warning]`**: The first grand finale release will be publish at v1.0.0.
- **`[v.0.1.0:update]`**: Very first release atempt; package core system stable.

---

---

# Gatsby Atomic Block

#### LAYOUT BUILDER _by [Edu4Dev](https://edu4.dev)_

**Engine Agent:** Gatsby - Javascript Framework

**Engine SubAgent:** Gatsby Plugin

**Gatsby Plugin Name:** Gatsby Atomic Block

**Author:** Edu4Dev - Milton Bolonha

**Description:** Gatsby Atomic Block is the platform web creators choose to mount professional coomponents to GatsbyJS, using one atomic block you have attributes as paragraph, heading, image, link, carousel, columns, fontColor and much more, with sanitize method.

\*_Keep in mind these bundle aren't a block builder._

---

**Plugin URI:** https://www.npmjs.com/package/gatsby-atomic-block

**Plugin Install:** `npm i gatsby-atomic-block`

**Version:** 0.2.0

**Year:** 2021

Invoke Atomic Block in your custom component:

```js
// Place your Atomic Block inside your own custom Block
// Do that using the Gatsby Block Builder Standard
<AtomicBlock
	// Types BLOCK or MODAL, should modal removed nope?
	type={`BLOCK`}

	// blockTitle={`your var goes here`}
	// alignTo={`your var goes here`}
	// backgroundColor={`your var #hex here`}

	// Need to change to right name in sliderClass
	// I will switch sliderClass to blockClass
	// sliderClass={`your var goes here`}

	// Emmet::block::AtomicBlock[numColumns=3]
	// Emmet::pseudo_output::Layout*3>AtomicBlock*3
	// Example: 
	//  <Layout numColumns={3} >
	//   <AtomicBlock numColumns={3} />
	// </Layout>
	// numColumns={`your var goes here`}

	// Internal and External http.links
	// Output::a[href="https://external"]
	// or
	// Output::<Link to="/internal-page-link" />
	// Automatic switch not coded
	// link={`your var goes here`}
	// linkText={`your var goes here`}

	// Echo/Print Heading <h$> sanitized
	// heading={`your var goes here`}
	// Heading importance not coded yet
	// Heading importance 10 = <h1>
	// Heading importance 9 = <h2>
	// Heading importance 8 = <h3>
	// Heading importance 7 = <h4>
	// Heading importance 6 = <h5>
	// Heading importance 5 = <h6>
	// headingImportance={10}
	// Notice, use <Layout type="MAIN" /> to
	// wrapper your heading schema
	// <Layout type="MAIN" /> not available yet
	// on gatsby-layout-builder v.0.1.7

	// Echo/Print Paragraph <p> sanitized
	// paragraph={`your var goes here`}

	// Img's
	// srcSet={`your var goes here`}
	// sizes={`your var goes here`}
	// src={`your var goes here`}
	// Every image must have an alternative text
	// alt={`your var goes here`}

	// Forms has id and the <form> > <code>
	// formID={`your var goes here`}
	// Doesn't need to use <form>
	// Gatsby will ever output an 100% static files
	// To use form actions you must server this in a right manner
	// To do that, use Meli.sh or Netlify Serverless
	// form={`your var goes here`}

	// Default: false == Default: columns
	// isCarousel={false}

	// not available yet
	// fontColor={`#000`}
	// fontSize={14}

	// Display canvas block infos for each ABlock
	// canvas.atomic-block.infos{
  //   position; styles; childs; plain_texts;
	// } 
	// debug={false}
>
	// Your paramaters will be outputed in here
	// Your content goes here
	// {children}
</AtomicBlock>
```

Inside the Atomic Block we do have the main elements to be used on the construction of your custom block.

You should use ```<AtomicBlock />``` as many as you can, combine it with the Gatsby Layout Builder plugin.

```js
// Below you can view each type of output components
// subAgent's are elements.children's
// comes from inside <AtomicBlock>{children}</AtomicBlock>
// type BLOCK
<ABblockcontainer
	subAgent={subAgent}
	params={params}
	contents={contents}
	configs={configs}
/>
// type MODAL should (yes) I remove modal from AB?
<ABmodalcontainer
	data={data}
	subAgent={subAgent}
	contents={contents}
/>
// type::BLOCK_or_MODAL::img
<ABimg
	elementClass={elementClass}
	srcSet={contents.srcSet}
	sizes={contents.sizes}
	src={contents.src}
	alt={alt}
/>
// type::BLOCK_or_MODAL::h$
<ABheading
	elementClass={elementClass}
	heading={contents.heading}
	fontSize={contents.fontSize}
	fontColor={contents.fontColor}
/>
// type::BLOCK_or_MODAL::p
<ABparagraph
	elementClass={elementClass}
	paragraph={contents.paragraph}
/>
// type::BLOCK_or_MODAL::a_or_Link
<ABlink
	elementClass={elementClass}
	link={contents.link}
	linkText={contents.linkText}
/>
// type::BLOCK_or_MODAL::form without action must be normalize
<ABform name={formName} formId={contents.formID} form={contents.form} />
```

## 🚀 Quick start

To get started to invoke rows, columns, modals, header and footer wrapper
standard structure on your theme, you can follow these steps:

1. Install Gatsby Atomic Block plugin with:

```shell
npm i gatsby-atomic-block
```

If you already have customize your gatsby-config.js, you can use it.
Otherwise, you should [create a new gatsby-config.js file](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) to setting your plugin.

2. Add the Gatsby Layout plugin to the build. In your gatsby-config.js insert the code:

```javascript
module.exports = {
	plugins: [`gatsby-atomic-block`],
	// if you just have the plugins array
	// you may need to place the plugin string name
	// between the right objects and arrays
	//
}
```

The Gatsby Atomic Block can you be used in your normal Gatsby ambient.
Something like this:

```
/in-your-gatsby-website
├── ./src/components
├──── ComponentX.js
├── ./src/pages
├──── index.js
└── Gatsby-config.js

/gatsby-business-in-build
├── index.js
├── package.json
└── README.md

```

Those types who accept subAgent parameter may be used as wrapper of some children element.

4. Dependencies

```json
	{
		"dependencies":{
			"gatsby": "^4.1.0",
			"gatsby-layout-builder": "^0.1.7",
			"gatsby-plugin-image": "^2.1.0",
			"react": "^17.0.2",
			"react-dom": "^17.0.2",
			"react-icons": "^4.3.1",
			"sass": "^1.43.4"
	},
  	"devDependencies": {
    	"prettier": "^2.4.1"
  }}
```

## 🧐 What's inside?

```text
/nu-module
├── element_structure
├── element_logics
├── element_styles
├── configs
├── persistent_vars
├── tools
├── root_files
├── wrapper_gatsby
├── room.code-workspace
└── README.md
```

## 🎓 Learning Gatsby

If you're looking for more guidance on plugins, how they work, or what their role is in the Gatsby ecosystem, check out some of these resources:

- The [Creating Plugins](https://www.gatsbyjs.com/docs/creating-plugins/) section of the docs has information on authoring and maintaining plugins yourself.
- The conceptual guide on [Plugins, Themes, and Starters](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/) compares and contrasts plugins with other pieces of the Gatsby ecosystem. It can also help you [decide what to choose between a plugin, starter, or theme](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/#deciding-which-to-use).
- The [Gatsby plugin library](https://www.gatsbyjs.com/plugins/) has over 1750 official as well as community developed plugins that can get you up and running faster and borrow ideas from.
