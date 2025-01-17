import React from 'react';
import BoxSection from './BoxSection'
function SubRubbish() {

    return (
        <div>

            <BoxSection type="household" title="House Waste" des="Furniture, appliances, and general clutter" />
            <BoxSection type="commercial" title="Commercial Waste" des="Office equipment, retail waste, and more." />
            <BoxSection type="construction" title="Construction Waste" des="Bricks, rubble, and debris." />

        </div>
    );
}

export default SubRubbish;
