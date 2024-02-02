import * as Sentry from '@sentry/react';
import { FirebaseApp, } from 'firebase/app';
import { getAnalytics, logEvent, } from 'firebase/analytics';

export const handleError = (error : any) => {
    if (import.meta.env.PROD) {
        Sentry.captureException(error);
    } else {
        console.error(error);
    }
};

export const logPageView = (app : FirebaseApp, {
    pageName,
    route,
} : {
    pageName : string,
    route    : string,
}) => logEvent(getAnalytics(app), 'page_view', {
    page_title    : pageName,
    page_location : route,
});

export const logAddToCart = (app : FirebaseApp, {
    itemId,
} : {
    itemId : string,
}) => logEvent(getAnalytics(app), 'add_to_cart', {
    items : [
        {
            item_id : itemId,
        },
    ],
});

export const logRemoveFromCart = (app : FirebaseApp, {
    itemId,
} : {
    itemId : string,
}) => logEvent(getAnalytics(app), 'remove_from_cart', {
    items : [
        {
            item_id : itemId,
        },
    ],
});

export const logCheckout = (app : FirebaseApp, {
    itemIds,
} : {
    itemIds : string[],
}) => logEvent(getAnalytics(app), 'checkout', {
    items : itemIds.map((itemId : string) => ({
        item_id : itemId,
    })),
});

export const logSearch = (app : FirebaseApp, {
    query,
} : {
    query : string,
}) => logEvent(getAnalytics(app), 'search', {
    search_term : query,
});

export const logShare = (app : FirebaseApp, {
    product,
    itemId,
} : {
    product : 'packages' | 'tweaks',
    itemId  : string,
}) => logEvent(getAnalytics(app), 'share', {
    content_type : product,
    item_id      : itemId,
});
