import { LiveEvent } from "@microsoft/live-share";
import { useState, useEffect, useCallback, useRef } from "react";

export const useNotifications = (notificationEvent, context) => {
    const initializeStartedRef = useRef(false);
    const [notificationToDisplay, setNotificationToDisplay] = useState();
    const [notificationStarted, setStarted] = useState(false);

    const sendNotification = useCallback(
        async (notificationText) => {
            console.log("useNotifications: sending a notification");
            const userPrincipalName =
                context?.user.userPrincipalName ?? "Someone@contoso.com";
            const name = userPrincipalName.split("@")[0];
            // Emit the event
            notificationEvent?.send({
                text: notificationText,
                senderName: name,
            });
        },
        [notificationEvent, context]
    );

    useEffect(() => {
        if (
            !notificationEvent ||
            notificationEvent.isInitialized ||
            initializeStartedRef.current
        )
            return;
        initializeStartedRef.current = true;
        notificationEvent.on("received", (event, local) => {
            // Display notification differently for local vs. remote users
            if (local) {
                setNotificationToDisplay(`You ${event.text}`);
            } else {
                setNotificationToDisplay(`${event.senderName} ${event.text}`);
            }
        });

        notificationEvent
            .initialize()
            .then(() => {
                setStarted(true);
            })
            .catch((error) => console.error(error));
    }, [notificationEvent, setNotificationToDisplay, setStarted]);

    return {
        notificationStarted,
        notificationToDisplay,
        sendNotification,
    };
};
