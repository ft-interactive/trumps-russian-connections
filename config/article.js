export default () => ({ // eslint-disable-line

  // link file UUID
  id: '582cb6e4-8af4-11e6-8cb7-e7ada1d123b1',

  // canonical URL of the published page
  // https://ig.ft.com/sites/trumps-russian-connections get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/trumps-russian-connections/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Trump\'s Russian World: ' + 'Three decades of deals and dollars',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Political language is designed to make lies sound truthful' +
           'and murder respectable, and to give an appearance of solidity to pure wind',

  topic: {
    name: '',
    url: '',
  },

  relatedArticle: {
    text: 'US Election 2016 »',
    url: 'https://www.ft.com/us-election-2016',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Michael Stott', url: 'https://www.ft.com/stream/authorsId/Yjg2YTBhOWQtMTZjMS00ZjUzLWIyYTYtMDVmYmNmYzNhZDAz-QXV0aG9ycw==' },
    { name: 'Catherine Belton', url: 'https://www.ft.com/search?q=Catherine+Belton'  },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
