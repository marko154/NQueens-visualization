import { Flex, Center } from "@chakra-ui/react";

const board = Array(4)
	.fill(0)
	.map(() => Array(4).fill(0));

const SmallBoard = ({ func }) =>
	board.map((row, i) => (
		<Flex flexDir="row" key={i}>
			{row.map((_, j) => (
				<Center
					key={j}
					bg={
						i % 2
							? j % 2
								? "white"
								: "#777"
							: j % 2
							? "#777"
							: "white"
					}
					w="35px"
					h="35px"
					border="1px solid #777"
					fontWeight="bold"
				>
					{String(func(i, j))}
				</Center>
			))}
		</Flex>
	));

export default SmallBoard;
