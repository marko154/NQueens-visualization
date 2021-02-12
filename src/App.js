import { useState, useEffect, useRef } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Actions from "./components/Actions/Actions";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import Explanation from "./components/Explanation/Explanation";
import solve from "./Algorithm/Solve";

const App = () => {
	const [n, setN] = useState(6);
	const [generator, setGenerator] = useState(null);
	const [columns, setColumns] = useState([[0], true]);
	const [isAnimating, setIsAnimating] = useState(false);
	const isAnimatingRef = useRef(false);
	const speedRef = useRef(50);
	const animationRef = useRef();

	useEffect(() => {
		setGenerator(solve(n));
	}, [n]);
	useEffect(() => {
		if (generator) setColumns(generator.next().value);
	}, [generator]);

	const onNextStep = () => {
		const { done, value } = generator.next();
		if (done) {
			setIsAnimating(false);
			cancelAnimationFrame(animationRef.current);
		} else setColumns(value);
	};

	const onResetGrid = () => {
		setGenerator(solve(n));
	};

	const startAnimation = () => {
		let lastRender = null;
		isAnimatingRef.current = !isAnimatingRef.current;
		setIsAnimating(true);
		if (isAnimatingRef.current) {
			animationRef.current = requestAnimationFrame(function animate(
				timestamp
			) {
				if (lastRender === null) lastRender = timestamp;
				if (timestamp - lastRender > speedRef.current) {
					lastRender = null;
					onNextStep();
				}
				animationRef.current = requestAnimationFrame(animate);
			});
		} else {
			cancelAnimationFrame(animationRef.current);
			isAnimatingRef.current = false;
			setIsAnimating(false);
		}
	};

	return (
		<ChakraProvider>
			<Header />
			<Flex
				flexDirection={["column", "column", "column", "row", "row"]}
				justifyContent="space-evenly"
			>
				<div>
					<Actions
						n={n}
						setN={setN}
						onNextStep={onNextStep}
						onResetGrid={onResetGrid}
						onStartAnimation={startAnimation}
						isAnimating={isAnimating}
						setSpeed={(speed) => {
							speedRef.current = speed;
						}}
					/>

					<Board n={n} step={columns} />
				</div>
				<Explanation step={columns} />
			</Flex>
		</ChakraProvider>
	);
};

export default App;
