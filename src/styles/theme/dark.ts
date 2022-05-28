import { lighten } from "polished";

import light from "./light";

const palette = { ...light.palette };
palette.primaryLight = lighten(0.3, palette.primary);

const theme = { ...light, palette };

export default theme;
