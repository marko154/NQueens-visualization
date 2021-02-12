import { Box, Text, Flex } from "@chakra-ui/react";
import SmallBoard from "./SmallBoard";

const AlgorithmExplanation = () => {
	return (
		<>
			<Text fontWeight="600" color="gray.700">
				The solution to this problem is a recursive backtracking
				algorithm.
			</Text>
			<Box height="15px" width="100%" />
			<Text fontWeight="600" color="gray.700">
				We define three sets that will represent the cells that are
				under attack. Left diagonals, right diagonals and columns (we
				don't need to check for rows, since the algorithm never places
				two queens on the same row).
			</Text>
			<Flex
				flexDirection="row"
				width="100%"
				justifyContent="space-evenly"
				paddingBottom="5px"
			>
				<span>
					Columns
					<SmallBoard func={(a, b) => b} />
				</span>
				<span>
					LD: col + row
					<SmallBoard func={(a, b) => a + b} />
				</span>
				<span>
					RD: col + n - row
					<SmallBoard func={(a, b) => a + 4 - b} />
				</span>
			</Flex>
			<Box height="15px" width="100%" />
			<Text fontWeight="600" color="gray.700">
				We also define a dynamic array in which we store the columns in
				which queens appear. The index of the array corresponds to a row
				in the grid.
			</Text>
			<Box height="15px" width="100%" />
			<Text fontWeight="600" color="gray.700">
				Now for we try to place a queen in each cell of a row if that
				position is not under attack. After each placement we move on to
				the next row and do the same. If the current row is the last and
				we found a valid position, return the array of queens. Otherwise
				the entire row was invalid so you have to backtrack to the
				previous row and try the next position.
			</Text>
		</>
	);
};

export default AlgorithmExplanation;
