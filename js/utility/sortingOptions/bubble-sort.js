async function bubbleSort() {

	let isSorted = false;
	let i = 0;
	let counter = 0;

	const bars = document.querySelectorAll('.bar');
	bars.forEach(bar => bar.style.backgroundColor = `purple`);

	while(!isSorted){

		isSorted = true;

		for(i = 0 ; i < sizeOfArray.value - 1 - counter ; i++){

			bars[i].style.backgroundColor = `red`;
			bars[i+1].style.backgroundColor = `red`;
		
			await sleepForAnimation();

			if(parseInt(bars[i].style.height) > parseInt(bars[i+1].style.height)){

				bars[i].style.backgroundColor = `greenyellow`;
				bars[i+1].style.backgroundColor = `greenyellow`;

				await sleepForAnimation();
				swapDomBars(bars,i,i+1);
				await sleepForAnimation();

				bars[i].style.backgroundColor = `purple`;
				bars[i+1].style.backgroundColor = `purple`;
				isSorted = false;
			}

			await sleepForAnimation();

			bars[i].style.backgroundColor = `purple`;
			bars[i+1].style.backgroundColor = `purple`;
		}

		bars[sizeOfArray.value - 1 - counter].style.backgroundColor = `deepskyblue`;
		counter++;
	}

	counter = sizeOfArray.value - counter;
	while(counter--){
		bars[counter].style.backgroundColor = `deepskyblue`;
	}

	algorithmPopup.classList.remove('popOut');

	for(let i = 0 ; i < sizeOfArray.value ; i++){
		bars[i].classList.add('isSortedBar');
		await bubbleUpAfterSorted();
		bars[i].style.backgroundColor = `greenyellow`
		bars[i].classList.remove('isSortedBar');
	}

	await waitForTime(1000);
	handleChangeSize();
}

//bubble sort button event listener
bubbleSortBtn.addEventListener('click', async () => {
	changeStatusOfButton(generateArrayButton);
	changeStatusOfButton(sizeOfArray);
	changeStatusOfButton(insertionSortBtn);
	changeStatusOfButton(selectionSortBtn);
	changeStatusOfButton(quickSortBtn);
	changeStatusOfButton(mergeSortBtn);
	bubbleSortBtn.classList.add('btn-warning');
	bubbleSortBtn.classList.add('insortingProcess');
	algorithmPopup.classList.add('popOut');
	algorithmPopup.innerHTML = bubbleSortAlgo;
	await bubbleSort();
	bubbleSortBtn.classList.remove('insortingProcess');
	bubbleSortBtn.classList.remove('btn-warning');
	algorithmPopup.innerHTML = ``;
	changeStatusOfButton(mergeSortBtn);
	changeStatusOfButton(quickSortBtn);
	changeStatusOfButton(selectionSortBtn);
	changeStatusOfButton(insertionSortBtn);
	changeStatusOfButton(sizeOfArray);
	changeStatusOfButton(generateArrayButton);
});

let bubbleSortAlgo = 
`
	<h4> Bubble Sort </h4>
	<strong> Time Complexity : quadratic</strong>
	<strong>Colour Indication : </strong>

	<div class='algoclass'>
		<div class='rred'></div>
		<strong>Elements in compare state</strong>
	</div>
	<div class='algoclass'>
		<div class='ggreenyellow'></div>
		<strong>&nbsp &nbsp Elements in swap state</strong>
	</div>
	<div class='algoclass'>
		<div class='ddeepskyblue'></div>
		<strong>&nbsp &nbsp Sorted Elements</strong>
	</div>
`;