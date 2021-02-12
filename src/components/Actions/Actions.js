import {
	Button,
	Stack,
	NumberInput,
	NumberInputField,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Actions = ({
	n,
	setN,
	onNextStep,
	onResetGrid,
	onStartAnimation,
	isAnimating,
	setSpeed,
}) => {
	return (
		<>
			<Stack direction="row" spacing={3} paddingX={70} paddingTop={10}>
				<Button
					borderColor="#3182CE"
					variant="outline"
					isDisabled={isAnimating}
					onClick={onResetGrid}
				>
					Reset Grid
				</Button>
				<Button
					borderColor="#3182CE"
					variant="outline"
					onClick={onStartAnimation}
				>
					{isAnimating ? "Stop Animation" : "Start Animation"}
				</Button>
				<Button
					onClick={onNextStep}
					rightIcon={<ArrowForwardIcon />}
					variant="outline"
					borderColor="#3182CE"
					isDisabled={isAnimating}
				>
					Next Step
				</Button>
				<NumberInput
					width="90px"
					borderColor="#3182CE"
					defaultValue={6}
					min={2}
					max={10}
					keepWithinRange={true}
					clampValueOnBlur={true}
					isDisabled={isAnimating}
					onChange={(num) =>
						num !== "" &&
						num !== n &&
						setN(Number(Math.min(Math.max(3, num), 10)))
					}
				>
					<NumberInputField />
				</NumberInput>
			</Stack>
			<Box paddingX={70} paddingY={5}>
				<Slider
					aria-label="slider-ex-2"
					onChange={(e) => setSpeed(350 - Number(e))}
					cancellable="false"
					max={350}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb boxSize={7} />
				</Slider>
			</Box>
		</>
	);
};

export default Actions;
