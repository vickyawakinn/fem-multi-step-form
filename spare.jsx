dataUpdate((prev) => {
    const urlObj = new URL(document.URL);
    const urlPath = urlObj.pathname;

    if (urlPath === "/") {
        return {
            ...prev,
            active: {
                prev: undefined,
                current: "/",
                next: "/selectPlan",
            },
        };
    } else if (urlPath === "/selectPlan") {
        return {
            ...prev,
            active: {
                prev: "/",
                current: "/selectPlan",
                next: "/addOns",
            },
        };
    } else if (urlPath === "/addOns") {
        return {
            ...prev,
            active: {
                prev: "/selectPlan",
                current: "/addOns",
                next: "/summary",
            },
        };
    } else if (urlPath === "/summary") {
        return {
            ...prev,
            active: {
                prev: "/addOns",
                current: "/summary",
                next: "/thankYou",
            },
        };
    }
});
