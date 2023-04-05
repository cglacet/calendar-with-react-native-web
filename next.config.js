const withTM = require("next-transpile-modules"); // pass the modules you would like to see transpiled

const modulesToTranspile = [
    "react-native-calendars",
    "react-native-swipe-gestures",
    "recyclerlistview",
];

/** @type {import('next').NextConfig} */
const configuration = {
    transpilePackages: modulesToTranspile,
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            "react-native$": "react-native-web",
        };
        config.resolve.extensions = [
            ".web.js",
            ".web.jsx",
            ".web.ts",
            ".web.tsx",
            ...config.resolve.extensions,
            "...",
        ];
        return config;
    },
};

module.exports = withTM(modulesToTranspile)(configuration);
