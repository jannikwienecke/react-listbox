# Slider for asynchron React-Applications

## What it is

_A react component that allows to_ control your async media players - works best with api's such as
Spotify. Controlling the slider allows to automatically control the position of the song/media on all connected devices

## Installation

    npm i @bit/jannikwienecke.personal.react-slider
    // or yarn
    yarn add @bit/jannikwienecke.personal.react-slider

## Usage Examples

### Usage - MOST BASIC - Without External Control

```jsx
mport  React  from  "react";
import  Slider  from  "../lib";

const  App  =  ()  =>  {

	const  state  =  {
		isPlaying:  true
		currentMediaId: 1
		currentMsSong: 10000
		totalMsSong: 200000
	}

	return  (
		<Slider
			state={state}
			onChange={() => console.log("SLIDER POSITION CHANGED"}
			onDragStart={() => console.log("USER DRAG START"}
		/>
	);
};
export  default  App;
```

### stylesPointer

| name            | type   | description |
| --------------- | ------ | ----------- |
| width           | string | optional    |
| height          | string | optional    |
| backgroundColor | string | optional    |
| borderRadius    | string | optional    |
| top             | string | optional    |
| left            | string | optional    |
