module.exports = {

"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
"[project]/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "factory": (()=>factory),
    "getWithProps": (()=>getWithProps),
    "identity": (()=>identity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function identity(value) {
    return value;
}
function getWithProps(Component) {
    const _Component = Component;
    return (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(_Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = _Component.extend;
        Extended.displayName = `WithProps(${_Component.displayName})`;
        return Extended;
    };
}
function factory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.extend = identity;
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = `WithProps(${Component.displayName})`;
        return Extended;
    };
    return Component;
}
;
 //# sourceMappingURL=factory.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "polymorphicFactory": (()=>polymorphicFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function polymorphicFactory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = `WithProps(${Component.displayName})`;
        return Extended;
    };
    Component.extend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
    return Component;
}
;
 //# sourceMappingURL=polymorphic-factory.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "filterProps": (()=>filterProps)
});
'use client';
function filterProps(props) {
    return Object.keys(props).reduce((acc, key)=>{
        if (props[key] !== void 0) {
            acc[key] = props[key];
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=filter-props.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useProps": (()=>useProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useProps(component, defaultProps, props) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const contextPropsPayload = theme.components[component]?.defaultProps;
    const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
    return {
        ...defaultProps,
        ...contextProps,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props)
    };
}
;
 //# sourceMappingURL=use-props.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useStylesTransform": (()=>useStylesTransform)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useStylesTransform({ props, stylesCtx, themeName }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const stylesTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineStylesTransform"])()?.();
    const getTransformedStyles = (styles)=>{
        if (!stylesTransform) {
            return [];
        }
        const transformedStyles = styles.map((style)=>stylesTransform(style, {
                props,
                theme,
                ctx: stylesCtx
            }));
        return [
            ...transformedStyles,
            ...themeName.map((n)=>stylesTransform(theme.components[n]?.styles, {
                    props,
                    theme,
                    ctx: stylesCtx
                }))
        ].filter(Boolean);
    };
    return {
        getTransformedStyles,
        withStylesTransform: !!stylesTransform
    };
}
;
 //# sourceMappingURL=use-transformed-styles.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FOCUS_CLASS_NAMES": (()=>FOCUS_CLASS_NAMES),
    "getGlobalClassNames": (()=>getGlobalClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
const FOCUS_CLASS_NAMES = {
    always: "mantine-focus-always",
    auto: "mantine-focus-auto",
    never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]), options?.active && !unstyled && theme.activeClassName);
}
;
 //# sourceMappingURL=get-global-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveClassNames": (()=>resolveClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
    const merged = {};
    objects.forEach((obj)=>{
        Object.entries(obj).forEach(([key, value])=>{
            if (merged[key]) {
                merged[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(merged[key], value);
            } else {
                merged[key] = value;
            }
        });
    });
    return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
    const arrayClassNames = Array.isArray(classNames) ? classNames : [
        classNames
    ];
    const resolvedClassNames = arrayClassNames.map((item)=>typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES);
    return mergeClassNames(resolvedClassNames);
}
;
 //# sourceMappingURL=resolve-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getThemeClassNames": (()=>getThemeClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-ssr] (ecmascript)");
'use client';
;
function getThemeClassNames({ themeName, theme, selector, props, stylesCtx }) {
    return themeName.map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames: theme.components[n]?.classNames,
            props,
            stylesCtx
        })?.[selector]);
}
;
 //# sourceMappingURL=get-theme-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getVariantClassName": (()=>getVariantClassName)
});
'use client';
function getVariantClassName({ options, classes, selector, unstyled }) {
    return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}
;
 //# sourceMappingURL=get-variant-class-name.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getResolvedClassNames": (()=>getResolvedClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-ssr] (ecmascript)");
'use client';
;
function getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames,
        props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-resolved-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getOptionsClassNames": (()=>getOptionsClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-ssr] (ecmascript)");
'use client';
;
function getOptionsClassNames({ selector, stylesCtx, options, props, theme }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames: options?.classNames,
        props: options?.props || props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-options-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRootClassName": (()=>getRootClassName)
});
'use client';
function getRootClassName({ rootSelector, selector, className }) {
    return rootSelector === selector ? className : void 0;
}
;
 //# sourceMappingURL=get-root-class-name.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSelectorClassName": (()=>getSelectorClassName)
});
'use client';
function getSelectorClassName({ selector, classes, unstyled }) {
    return unstyled ? void 0 : classes[selector];
}
;
 //# sourceMappingURL=get-selector-class-name.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStaticClassNames": (()=>getStaticClassNames)
});
'use client';
function getStaticClassNames({ themeName, classNamesPrefix, selector, withStaticClass }) {
    if (withStaticClass === false) {
        return [];
    }
    return themeName.map((n)=>`${classNamesPrefix}-${n}-${selector}`);
}
;
 //# sourceMappingURL=get-static-class-names.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getClassName": (()=>getClassName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function getClassName({ theme, options, themeName, selector, classNamesPrefix, classNames, classes, unstyled, className, rootSelector, props, stylesCtx, withStaticClasses, headless, transformedStyles }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalClassNames"])({
        theme,
        options,
        unstyled: unstyled || headless
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeClassNames"])({
        theme,
        themeName,
        selector,
        props,
        stylesCtx
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVariantClassName"])({
        options,
        classes,
        selector,
        unstyled
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames: transformedStyles,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionsClassNames"])({
        selector,
        stylesCtx,
        options,
        props,
        theme
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRootClassName"])({
        rootSelector,
        selector,
        className
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectorClassName"])({
        selector,
        classes,
        unstyled: unstyled || headless
    }), withStaticClasses && !headless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticClassNames"])({
        themeName,
        classNamesPrefix,
        selector,
        withStaticClass: options?.withStaticClass
    }), options?.className);
}
;
 //# sourceMappingURL=get-class-name.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveStyles": (()=>resolveStyles)
});
'use client';
function resolveStyles({ theme, styles, props, stylesCtx }) {
    const arrayStyles = Array.isArray(styles) ? styles : [
        styles
    ];
    return arrayStyles.reduce((acc, style)=>{
        if (typeof style === "function") {
            return {
                ...acc,
                ...style(theme, props, stylesCtx)
            };
        }
        return {
            ...acc,
            ...style
        };
    }, {});
}
;
 //# sourceMappingURL=resolve-styles.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getThemeStyles": (()=>getThemeStyles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-ssr] (ecmascript)");
'use client';
;
function getThemeStyles({ theme, themeName, props, stylesCtx, selector }) {
    return themeName.map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: theme.components[n]?.styles,
            props,
            stylesCtx
        })[selector]).reduce((acc, val)=>({
            ...acc,
            ...val
        }), {});
}
;
 //# sourceMappingURL=get-theme-styles.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mergeVars": (()=>mergeVars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function mergeVars(vars) {
    return vars.reduce((acc, current)=>{
        if (current) {
            Object.keys(current).forEach((key)=>{
                acc[key] = {
                    ...acc[key],
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(current[key])
                };
            });
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=merge-vars.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveVars": (()=>resolveVars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-ssr] (ecmascript)");
'use client';
;
function resolveVars({ vars, varsResolver, theme, props, stylesCtx, selector, themeName, headless }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeVars"])([
        headless ? {} : varsResolver?.(theme, props, stylesCtx),
        ...themeName.map((name)=>theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
        vars?.(theme, props, stylesCtx)
    ])?.[selector];
}
;
 //# sourceMappingURL=resolve-vars.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveStyle": (()=>resolveStyle)
});
'use client';
function resolveStyle({ style, theme }) {
    if (Array.isArray(style)) {
        return [
            ...style
        ].reduce((acc, item)=>({
                ...acc,
                ...resolveStyle({
                    style: item,
                    theme
                })
            }), {});
    }
    if (typeof style === "function") {
        return style(theme);
    }
    if (style == null) {
        return {};
    }
    return style;
}
;
 //# sourceMappingURL=resolve-style.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStyle": (()=>getStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function getStyle({ theme, themeName, selector, options, props, stylesCtx, rootSelector, styles, style, vars, varsResolver, headless, withStylesTransform }) {
    return {
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeStyles"])({
            theme,
            themeName,
            props,
            stylesCtx,
            selector
        }),
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx
        })[selector],
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: options?.styles,
            props: options?.props || props,
            stylesCtx
        })[selector],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveVars"])({
            theme,
            props,
            stylesCtx,
            vars,
            varsResolver,
            selector,
            themeName,
            headless
        }),
        ...rootSelector === selector ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style,
            theme
        }) : null,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style: options?.style,
            theme
        })
    };
}
;
 //# sourceMappingURL=get-style.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useStyles": (()=>useStyles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function useStyles({ name, classes, props, stylesCtx, className, style, rootSelector = "root", unstyled, classNames, styles, vars, varsResolver }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const classNamesPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineClassNamesPrefix"])();
    const withStaticClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineWithStaticClasses"])();
    const headless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineIsHeadless"])();
    const themeName = (Array.isArray(name) ? name : [
        name
    ]).filter((n)=>n);
    const { withStylesTransform, getTransformedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStylesTransform"])({
        props,
        stylesCtx,
        themeName
    });
    return (selector, options)=>({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClassName"])({
                theme,
                options,
                themeName,
                selector,
                classNamesPrefix,
                classNames,
                classes,
                unstyled,
                className,
                rootSelector,
                props,
                stylesCtx,
                withStaticClasses,
                headless,
                transformedStyles: getTransformedStyles([
                    options?.styles,
                    styles
                ])
            }),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyle"])({
                theme,
                themeName,
                selector,
                options,
                props,
                stylesCtx,
                rootSelector,
                styles,
                style,
                vars,
                varsResolver,
                headless,
                withStylesTransform
            })
        });
}
;
 //# sourceMappingURL=use-styles.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/components/Center/Center.module.css.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>classes)
});
'use client';
var classes = {
    "root": "m_4451eb3a"
};
;
 //# sourceMappingURL=Center.module.css.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "extractStyleProps": (()=>extractStyleProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function extractStyleProps(others) {
    const { m, mx, my, mt, mb, ml, mr, me, ms, p, px, py, pt, pb, pl, pr, pe, ps, bd, bg, c, opacity, ff, fz, fw, lts, ta, lh, fs, tt, td, w, miw, maw, h, mih, mah, bgsz, bgp, bgr, bga, pos, top, left, bottom, right, inset, display, flex, hiddenFrom, visibleFrom, lightHidden, darkHidden, sx, ...rest } = others;
    const styleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])({
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        me,
        ms,
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        pe,
        ps,
        bd,
        bg,
        c,
        opacity,
        ff,
        fz,
        fw,
        lts,
        ta,
        lh,
        fs,
        tt,
        td,
        w,
        miw,
        maw,
        h,
        mih,
        mah,
        bgsz,
        bgp,
        bgr,
        bga,
        pos,
        top,
        left,
        bottom,
        right,
        inset,
        display,
        flex,
        hiddenFrom,
        visibleFrom,
        lightHidden,
        darkHidden,
        sx
    });
    return {
        styleProps,
        rest
    };
}
;
 //# sourceMappingURL=extract-style-props.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useRandomClassName": (()=>useRandomClassName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useRandomClassName() {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    return `__m__-${id}`;
}
;
 //# sourceMappingURL=use-random-classname.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sortMediaQueries": (()=>sortMediaQueries)
});
'use client';
function replaceMediaQuery(query) {
    return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({ media, ...props }) {
    const breakpoints = Object.keys(media);
    const sortedMedia = breakpoints.sort((a, b)=>Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query)=>({
            query,
            styles: media[query]
        }));
    return {
        ...props,
        media: sortedMedia
    };
}
;
 //# sourceMappingURL=sort-media-queries.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "colorResolver": (()=>colorResolver),
    "textColorResolver": (()=>textColorResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function colorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.color === "dimmed") {
        return "var(--mantine-color-dimmed)";
    }
    if (parsedColor.color === "bright") {
        return "var(--mantine-color-bright)";
    }
    return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
        return `var(--mantine-color-${parsedColor.color}-text)`;
    }
    return colorResolver(color, theme);
}
;
 //# sourceMappingURL=color-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fontSizeResolver": (()=>fontSizeResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function fontSizeResolver(value, theme) {
    if (typeof value === "string" && value in theme.fontSizes) {
        return `var(--mantine-font-size-${value})`;
    }
    if (typeof value === "string" && headings.includes(value)) {
        return `var(--mantine-${value}-font-size)`;
    }
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=font-size-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "spacingResolver": (()=>spacingResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function spacingResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const mod = value.replace("-", "");
        if (!(mod in theme.spacing)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
        }
        const variable = `--mantine-spacing-${mod}`;
        return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
    }
    return value;
}
;
 //# sourceMappingURL=spacing-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "identityResolver": (()=>identityResolver)
});
'use client';
function identityResolver(value) {
    return value;
}
;
 //# sourceMappingURL=identity-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sizeResolver": (()=>sizeResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function sizeResolver(value) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=size-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "lineHeightResolver": (()=>lineHeightResolver)
});
'use client';
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function lineHeightResolver(value, theme) {
    if (typeof value === "string" && value in theme.lineHeights) {
        return `var(--mantine-line-height-${value})`;
    }
    if (typeof value === "string" && headings.includes(value)) {
        return `var(--mantine-${value}-line-height)`;
    }
    return value;
}
;
 //# sourceMappingURL=line-height-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fontFamilyResolver": (()=>fontFamilyResolver)
});
'use client';
const values = {
    text: "var(--mantine-font-family)",
    mono: "var(--mantine-font-family-monospace)",
    monospace: "var(--mantine-font-family-monospace)",
    heading: "var(--mantine-font-family-headings)",
    headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
    if (typeof fontFamily === "string" && fontFamily in values) {
        return values[fontFamily];
    }
    return fontFamily;
}
;
 //# sourceMappingURL=font-family-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "borderResolver": (()=>borderResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function borderResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const [size, style, ...colorTuple] = value.split(" ").filter((val)=>val.trim() !== "");
        let result = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size)}`;
        style && (result += ` ${style}`);
        colorTuple.length > 0 && (result += ` ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorResolver"])(colorTuple.join(" "), theme)}`);
        return result.trim();
    }
    return value;
}
;
 //# sourceMappingURL=border-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolvers": (()=>resolvers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const resolvers = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorResolver"],
    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textColorResolver"],
    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizeResolver"],
    spacing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacingResolver"],
    identity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identityResolver"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeResolver"],
    lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineHeightResolver"],
    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontFamilyResolver"],
    border: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderResolver"]
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseStyleProps": (()=>parseStyleProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function hasResponsiveStyles(styleProp) {
    if (typeof styleProp !== "object" || styleProp === null) {
        return false;
    }
    const breakpoints = Object.keys(styleProp);
    if (breakpoints.length === 1 && breakpoints[0] === "base") {
        return false;
    }
    return true;
}
function getBaseValue(value) {
    if (typeof value === "object" && value !== null) {
        if ("base" in value) {
            return value.base;
        }
        return void 0;
    }
    return value;
}
function getBreakpointKeys(value) {
    if (typeof value === "object" && value !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(value).filter((key)=>key !== "base");
    }
    return [];
}
function getBreakpointValue(value, breakpoint) {
    if (typeof value === "object" && value !== null && breakpoint in value) {
        return value[breakpoint];
    }
    return value;
}
function parseStyleProps({ styleProps, data, theme }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortMediaQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(styleProps).reduce((acc, styleProp)=>{
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
            return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [
            propertyData.property
        ];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
            properties.forEach((property)=>{
                acc.inlineStyles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            });
            return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property)=>{
            if (baseValue) {
                acc.styles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            }
            breakpoints.forEach((breakpoint)=>{
                const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
                acc.media[bp] = {
                    ...acc.media[bp],
                    [property]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](getBreakpointValue(styleProps[styleProp], breakpoint), theme)
                };
            });
        });
        return acc;
    }, {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
    }));
}
;
 //# sourceMappingURL=parse-style-props.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "STYlE_PROPS_DATA": (()=>STYlE_PROPS_DATA)
});
'use client';
const STYlE_PROPS_DATA = {
    m: {
        type: "spacing",
        property: "margin"
    },
    mt: {
        type: "spacing",
        property: "marginTop"
    },
    mb: {
        type: "spacing",
        property: "marginBottom"
    },
    ml: {
        type: "spacing",
        property: "marginLeft"
    },
    mr: {
        type: "spacing",
        property: "marginRight"
    },
    ms: {
        type: "spacing",
        property: "marginInlineStart"
    },
    me: {
        type: "spacing",
        property: "marginInlineEnd"
    },
    mx: {
        type: "spacing",
        property: "marginInline"
    },
    my: {
        type: "spacing",
        property: "marginBlock"
    },
    p: {
        type: "spacing",
        property: "padding"
    },
    pt: {
        type: "spacing",
        property: "paddingTop"
    },
    pb: {
        type: "spacing",
        property: "paddingBottom"
    },
    pl: {
        type: "spacing",
        property: "paddingLeft"
    },
    pr: {
        type: "spacing",
        property: "paddingRight"
    },
    ps: {
        type: "spacing",
        property: "paddingInlineStart"
    },
    pe: {
        type: "spacing",
        property: "paddingInlineEnd"
    },
    px: {
        type: "spacing",
        property: "paddingInline"
    },
    py: {
        type: "spacing",
        property: "paddingBlock"
    },
    bd: {
        type: "border",
        property: "border"
    },
    bg: {
        type: "color",
        property: "background"
    },
    c: {
        type: "textColor",
        property: "color"
    },
    opacity: {
        type: "identity",
        property: "opacity"
    },
    ff: {
        type: "fontFamily",
        property: "fontFamily"
    },
    fz: {
        type: "fontSize",
        property: "fontSize"
    },
    fw: {
        type: "identity",
        property: "fontWeight"
    },
    lts: {
        type: "size",
        property: "letterSpacing"
    },
    ta: {
        type: "identity",
        property: "textAlign"
    },
    lh: {
        type: "lineHeight",
        property: "lineHeight"
    },
    fs: {
        type: "identity",
        property: "fontStyle"
    },
    tt: {
        type: "identity",
        property: "textTransform"
    },
    td: {
        type: "identity",
        property: "textDecoration"
    },
    w: {
        type: "spacing",
        property: "width"
    },
    miw: {
        type: "spacing",
        property: "minWidth"
    },
    maw: {
        type: "spacing",
        property: "maxWidth"
    },
    h: {
        type: "spacing",
        property: "height"
    },
    mih: {
        type: "spacing",
        property: "minHeight"
    },
    mah: {
        type: "spacing",
        property: "maxHeight"
    },
    bgsz: {
        type: "size",
        property: "backgroundSize"
    },
    bgp: {
        type: "identity",
        property: "backgroundPosition"
    },
    bgr: {
        type: "identity",
        property: "backgroundRepeat"
    },
    bga: {
        type: "identity",
        property: "backgroundAttachment"
    },
    pos: {
        type: "identity",
        property: "position"
    },
    top: {
        type: "size",
        property: "top"
    },
    left: {
        type: "size",
        property: "left"
    },
    bottom: {
        type: "size",
        property: "bottom"
    },
    right: {
        type: "size",
        property: "right"
    },
    inset: {
        type: "size",
        property: "inset"
    },
    display: {
        type: "identity",
        property: "display"
    },
    flex: {
        type: "identity",
        property: "flex"
    }
};
;
 //# sourceMappingURL=style-props-data.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBoxStyle": (()=>getBoxStyle)
});
'use client';
function mergeStyles(styles, theme) {
    if (Array.isArray(styles)) {
        return [
            ...styles
        ].reduce((acc, item)=>({
                ...acc,
                ...mergeStyles(item, theme)
            }), {});
    }
    if (typeof styles === "function") {
        return styles(theme);
    }
    if (styles == null) {
        return {};
    }
    return styles;
}
function getBoxStyle({ theme, style, vars, styleProps }) {
    const _style = mergeStyles(style, theme);
    const _vars = mergeStyles(vars, theme);
    return {
        ..._style,
        ..._vars,
        ...styleProps
    };
}
;
 //# sourceMappingURL=get-box-style.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isNumberLike": (()=>isNumberLike)
});
'use client';
function isNumberLike(value) {
    if (typeof value === "number") {
        return true;
    }
    if (typeof value === "string") {
        if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
            return true;
        }
        const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
        const values = value.trim().split(/\s+/);
        return values.every((val)=>cssUnitsRegex.test(val));
    }
    return false;
}
;
 //# sourceMappingURL=is-number-like.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBoxMod": (()=>getBoxMod),
    "getMod": (()=>getMod)
});
'use client';
function transformModKey(key) {
    return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
    return Object.keys(props).reduce((acc, key)=>{
        const value = props[key];
        if (value === void 0 || value === "" || value === false || value === null) {
            return acc;
        }
        acc[transformModKey(key)] = props[key];
        return acc;
    }, {});
}
function getBoxMod(mod) {
    if (!mod) {
        return null;
    }
    if (typeof mod === "string") {
        return {
            [transformModKey(mod)]: true
        };
    }
    if (Array.isArray(mod)) {
        return [
            ...mod
        ].reduce((acc, value)=>({
                ...acc,
                ...getBoxMod(value)
            }), {});
    }
    return getMod(mod);
}
;
 //# sourceMappingURL=get-box-mod.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "camelToKebabCase": (()=>camelToKebabCase)
});
'use client';
function camelToKebabCase(value) {
    return value.replace(/[A-Z]/g, (letter)=>`-${letter.toLowerCase()}`);
}
;
 //# sourceMappingURL=camel-to-kebab-case.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cssObjectToString": (()=>cssObjectToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function cssObjectToString(css) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(css).reduce((acc, rule)=>css[rule] !== void 0 ? `${acc}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["camelToKebabCase"])(rule)}:${css[rule]};` : acc, "").trim();
}
;
 //# sourceMappingURL=css-object-to-string.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stylesToString": (()=>stylesToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-ssr] (ecmascript)");
'use client';
;
function stylesToString({ selector, styles, media, container }) {
    const baseStyles = styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssObjectToString"])(styles) : "";
    const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item)=>`@media${item.query}{${selector}{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles)}}}`);
    const containerStyles = !Array.isArray(container) ? [] : container.map((item)=>`@container ${item.query}{${selector}{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles)}}}`);
    return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}
;
 //# sourceMappingURL=styles-to-string.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InlineStyles": (()=>InlineStyles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function InlineStyles(props) {
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
        "data-mantine-styles": "inline",
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesToString"])(props)
        }
    });
}
;
 //# sourceMappingURL=InlineStyles.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createPolymorphicComponent": (()=>createPolymorphicComponent)
});
function createPolymorphicComponent(component) {
    return component;
}
;
 //# sourceMappingURL=create-polymorphic-component.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Box": (()=>Box)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const _Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom, lightHidden, darkHidden, renderRoot, __size, ...others }, ref)=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const Element = component || "div";
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const useSxTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineSxTransform"])();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRandomClassName"])();
    const parsedStyleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStyleProps"])({
        styleProps,
        theme,
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STYlE_PROPS_DATA"]
    });
    const props = {
        ref,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBoxStyle"])({
            theme,
            style,
            vars: __vars,
            styleProps: parsedStyleProps.inlineStyles
        }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, transformedSx, {
            [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
            "mantine-light-hidden": lightHidden,
            "mantine-dark-hidden": darkHidden,
            [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
            [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? void 0 : size || void 0,
        size: __size,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBoxMod"])(mod),
        ...rest
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStyles"], {
                selector: `.${responsiveClassName}`,
                styles: parsedStyleProps.styles,
                media: parsedStyleProps.media
            }),
            typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Element, {
                ...props
            })
        ]
    });
});
_Box.displayName = "@mantine/core/Box";
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPolymorphicComponent"])(_Box);
;
 //# sourceMappingURL=Box.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Center": (()=>Center)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Center/Center.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {};
const Center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Center", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, inline, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Center",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                inline
            },
            mod
        ],
        ...getStyles("root"),
        ...others
    });
});
Center.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Center.displayName = "@mantine/core/Center";
;
 //# sourceMappingURL=Center.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createVarsResolver": (()=>createVarsResolver)
});
'use client';
function createVarsResolver(resolver) {
    return resolver;
}
;
 //# sourceMappingURL=create-vars-resolver.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFontSize": (()=>getFontSize),
    "getLineHeight": (()=>getLineHeight),
    "getRadius": (()=>getRadius),
    "getShadow": (()=>getShadow),
    "getSize": (()=>getSize),
    "getSpacing": (()=>getSpacing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function getSize(size, prefix = "size", convertToRem = true) {
    if (size === void 0) {
        return void 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? convertToRem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
    return getSize(size, "mantine-spacing");
}
function getRadius(size) {
    if (size === void 0) {
        return "var(--mantine-radius-default)";
    }
    return getSize(size, "mantine-radius");
}
function getFontSize(size) {
    return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
    return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
    if (!size) {
        return void 0;
    }
    return getSize(size, "mantine-shadow", false);
}
;
 //# sourceMappingURL=get-size.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>classes)
});
'use client';
var classes = {
    "root": "m_7485cace"
};
;
 //# sourceMappingURL=Container.module.css.mjs.map
}}),
"[project]/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Container": (()=>Container)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size, fluid })=>({
        root: {
            "--container-size": fluid ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "container-size")
        }
    }));
const Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Container", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, fluid, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Container",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                fluid
            },
            mod
        ],
        ...getStyles("root"),
        ...others
    });
});
Container.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Container.displayName = "@mantine/core/Container";
;
 //# sourceMappingURL=Container.mjs.map
}}),

};

//# sourceMappingURL=_99ffe4._.js.map