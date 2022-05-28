// Project constants

const ECUADOR = {
  name: "Ecuador",
  code: "593",
  isoCode: "EC",
  language: "es",
  flag: "🇪🇨",
  currencySymbol: "$"
};

const CONSTANTS = {
  // HTML title tag text (Useful to display the brand name for SEO)
  TITLE: "Next boilerplate",
  // Project configurations
  ARTISN: {
    // Default country
    DEFAULT_COUNTRY: ECUADOR,
    // Catalogues
    COUNTRIES: [ECUADOR],
    // The types of the goods being sold (Useful for analytics)
    CONTENT_TYPE: "food"
  },
  // REST API configurations
  API: {
    // API url
    API_URL: "http://localhost:3000",
    // Mock services, change to false if you don't want to mock
    MOCK_SERVICES: false,
    // If true a registered user with address, billing data and orders will be present
    MOCK_WITH_INITIAL_USER_DATA: false,
    // Default max waiting time for a request reply
    DEFAULT_REQUEST_TIMEOUT: 10000
  },
  // Activate or deactivate features
  FEATURE_FLAGS: {
    // Allows the user to activate or deactivate the dark mode
    WITH_DARK_MODE: false
  },
  // Limit user actions
  CONSTRAINTS: {},
  // Store user preferences
  STORAGE: {
    // Local storage theme preference key
    THEME_PREFERENCE_TOKEN: "artisn-theme-preference"
  },
  // CSS Break Points
  BREAKPOINTS: {
    mobile: 420,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    hd: 2560
  },
  // General settings
  GENERAL: {
    // Excluded status codes that should not be logged
    EXCLUDED_LOGGER_STATUS_CODES: [422],
    // Included environments that should be logged
    INCLUDED_LOGGER_ENVS: ["staging", "production"],
    // Included Internationalization environments that should be logged to the
    // console
    INCLUDED_INTL_LOG_ENVS: ["production"],
    // Platform running the application
    PLATFORM: process.env.REACT_APP_PLATFORM ?? "web",
    // Get this font from google
    FONT: "Lato",
    // Weight of fonts obtained
    FONT_WEIGHTS: [400, 600]
  },
  INTEGRATIONS: {}
};

export default CONSTANTS;
