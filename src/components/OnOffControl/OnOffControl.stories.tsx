import React, {useState} from 'react';
import {RatingControl, RatingValueType} from "./RatingControl";

export default {
  title: 'RatingControl',
  component: RatingControl
};

export const EmptyRating = () => <RatingControl value={0} onClick={x => x}/>;
export const Rating1 = () => <RatingControl value={1} onClick={x => x}/>;
export const Rating2 = () => <RatingControl value={2} onClick={x => x}/>;
export const Rating3 = () => <RatingControl value={3} onClick={x => x}/>;
export const Rating4 = () => <RatingControl value={4} onClick={x => x}/>;
export const Rating5 = () => <RatingControl value={5} onClick={x => x}/>;

export const ChangeRating = () => {

  let [raitng, setRating] = useState<RatingValueType>(3)
  return (
    <RatingControl value={raitng} onClick={setRating}/>
  )
}



