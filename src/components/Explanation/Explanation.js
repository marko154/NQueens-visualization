import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	Box,
} from "@chakra-ui/react";
import Code from "../Code/Code";
import AlgorithmExplanation from "./AlgorithmExplanation";

const Explanation = ({ step }) => {
	const [queens, isValidPos, isValidBoard, cols, ld, rd] = step;
	return (
		<Tabs
			marginTop={30}
			width="45vw"
			boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
			0 6.7px 5.3px rgba(0, 0, 0, 0.048),
			0 12.5px 10px rgba(0, 0, 0, 0.06),
			0 22.3px 17.9px rgba(0, 0, 0, 0.072),
			0 41.8px 33.4px rgba(0, 0, 0, 0.086),
			0 100px 80px rgba(0, 0, 0, 0.12)"
			paddingTop="30px"
		>
			<TabList paddingX="50px">
				<Tab>Algorithm</Tab>
				<Tab>Board</Tab>
				<Tab>Code</Tab>
			</TabList>

			<TabPanels>
				<TabPanel paddingTop={10} paddingX="50px">
					<AlgorithmExplanation />
				</TabPanel>
				<TabPanel paddingTop={10} paddingX="50px">
					<Text fontSize="17px" color="gray.700" fontWeight="600">
						The n-queens problem requires you to arrange N queens on
						a N×N chessboard, such that no queen is attacking
						another queen. (a queen can attack horizontally,
						vertically and diagonally)
					</Text>
					<Box height="25px" width="100%" />
					<Text fontSize="2xl" color="gray.700">
						{isValidBoard
							? "A valid placement was found!"
							: queens.length
							? isValidPos
								? `Row ${queens.length}, Col ${
										queens[queens.length - 1] + 1
								  } is a valid position. Go to the next row.`
								: queens[queens.length - 1] === 5
								? `Row ${queens.length}, Col ${
										queens[queens.length - 1] + 1
								  } is not a valid position. Backtrack to the previous line`
								: `Row ${queens.length}, Col ${
										queens[queens.length - 1] + 1
								  } is not a valid position. Try the next column.`
							: ""}
					</Text>
					<Box height="25px" width="100%" />
					<Text fontWeight="600">
						Columns under attack <br />
						{cols &&
							`[${[...cols].sort((a, b) => a - b).join(", ")}]`}
					</Text>
					<Box height="15px" width="100%" />
					<Text fontWeight="600">
						Left Diagonals under atttack <br />
						{ld &&
							"[" +
								[...ld].sort((a, b) => a - b).join(", ") +
								"]"}
					</Text>
					<Box height="15px" width="100%" />
					<Text fontWeight="600">
						Right diagonals under attack <br />
						{rd &&
							"[" +
								[...rd].sort((a, b) => a - b).join(", ") +
								"]"}
					</Text>
				</TabPanel>
				<TabPanel>
					<Code />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default Explanation;
