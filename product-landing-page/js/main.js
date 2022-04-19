'use strict';

/* 
key: css property
value: [minValue, maxValue, string to append on random value]
*/
const PROPERTY_VALUE_RANGES = {
    width: [5, 20, '%'],
    'animationDelay': [0, 15, 's'],
    'animationDuration': [10, 45, 's'],
};

function addRandomAnimatedBackgroundItemPropertiesSingle(itemElement) {
    let valueArr = [];
    let randVal = 0;
    for (const [key, valueArr] of Object.entries(PROPERTY_VALUE_RANGES)) {
        randVal = getRandom(valueArr[0], valueArr[1]);
        // If key is 'width', use to calculate random 'left' property
        if (key === 'width') {
            itemElement.style.left = getRandom(0, 100 - randVal) + '%';
        }
        itemElement.style[key] = randVal.toString().concat(valueArr[2]);
    }
    itemElement.style.opacity = Math.random() * 0.5 + 0.5;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addRandomAnimatedBackgroundItemProperties() {
    const animatedBGItemsNodeList = document.querySelectorAll('.animated-bg-item');
    if (!animatedBGItemsNodeList) return;

    animatedBGItemsNodeList.forEach(itemNode => {
        addRandomAnimatedBackgroundItemPropertiesSingle(itemNode);
    });
}

(function() {
    addRandomAnimatedBackgroundItemProperties();
})();