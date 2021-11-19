
const sendTagEvent = (event) => {
    const target = event.currentTarget
    const category = target.getAttribute(CATEGORY_MARKER);
    const action = target.getAttribute(ACTION_MARKER);
    const label = target.getAttribute(LABEL_MARKER);
    ga('send', 'event', category, action, label);
}

const addSendTagEvent = (el) => {
    const eventType = (el.getAttribute('eventType'));
    el.addEventListener(eventType, sendTagEvent, false);

}

const appendListenerToElements = () => {
    const elementsToTag = document.querySelectorAll(`[${MONITORING_MARKER}]`)
    elementsToTag.forEach((el) => addSendTagEvent(el))

}

window.onload = function () {
    appendListenerToElements()
};