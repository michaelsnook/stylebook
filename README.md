# Stylebook
Create a style guide with organisational branding guidelines, assets,
sample markup, React components, and Bootstrap SCSS.

Bootstrapped with create-react-app. [Read the create-react-app docs here.](https://github.com/facebook/create-react-app/blob/77148107d9f3b20fb874a8da3146172c34e921db/README.md)

## How it works

#### At the moment
1. You clone this repo, `npm install && npm-start`.
1. Write React components in `src/components`.
1. Add component styles in one of the files included by `App.scss`.
1. Add content to `views/Stylebook.js` to display new components
  1. Use the pattern `<Example><NewComponent /></Example>`
  1. Add explanatory text, and/or use `<Example title="Some descriptive text at the top">`
to describe where and how this component is used in your organisation's design language.
1. Push to Heroku to publish.
1. Use this same CSS for your branding and component styles for all your work on the web.
  1. Or copy and export `App.scss` and its dependencies. (Styles specific to this site are kept separate.)
1. Give this stylebook to all your front end developers and contractors to streamline development
and ensure consistent branding and UX across all properties.

#### In the future (maybe)
* Use the style guide site to copy HTML samples or React component markup.
* Separate components from organisation branding to make components re-usable across
different Stylebooks with the same UX needs but different brands.
* Add or clone components, store them in a database; render them live on the admin screen.
* Use this app to generate production CSS for branding and components, and deploy
to a CDN so that other apps and sites can include it directly.
* Import your components directly into another React project.
* Import your SCSS stylesheets directly into another project.
* Load multiple brands in one app to create a Stylebook that shows the same set
of components with different branding for different sites or organisations.
