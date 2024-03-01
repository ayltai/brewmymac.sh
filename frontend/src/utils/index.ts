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
}) => {
    try {
        logEvent(getAnalytics(app), 'page_view', {
            page_title    : pageName,
            page_location : route,
        });
    } catch (error) {
        handleError(error);
    }
};

export const logAddToCart = (app : FirebaseApp, {
    itemId,
} : {
    itemId : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'add_to_cart', {
            items : [
                {
                    item_id : itemId,
                },
            ],
        });
    } catch (error) {
        handleError(error);
    }
};

export const logRemoveFromCart = (app : FirebaseApp, {
    itemId,
} : {
    itemId : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'remove_from_cart', {
            items : [
                {
                    item_id : itemId,
                },
            ],
        });
    } catch (error) {
        handleError(error);
    }
};

export const logCheckout = (app : FirebaseApp, {
    itemIds,
} : {
    itemIds : string[],
}) => {
    try {
        logEvent(getAnalytics(app), 'checkout', {
            items : itemIds.map((itemId : string) => ({
                item_id : itemId,
            })),
        });
    } catch (error) {
        handleError(error);
    }
};

export const logSearch = (app : FirebaseApp, {
    query,
} : {
    query : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'search', {
            search_term : query,
        });
    } catch (error) {
        handleError(error);
    }
};

export const logShare = (app : FirebaseApp, {
    product,
    itemId,
} : {
    product : 'packages' | 'tweaks',
    itemId  : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'share', {
            content_type : product,
            item_id      : itemId,
        });
    } catch (error) {
        handleError(error);
    }
};
