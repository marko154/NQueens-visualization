import { useState, useEffect } from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import { FaChessQueen } from "react-icons/fa";

const getBoard = (n) => {
	return Array(n)
		.fill(0)
		.map(() => Array(n).fill(0));
};

const blue = "#3182CE";
const validColor = "#0AFF84";
const invalidColor = "#FF3939";
const hoveredColor = "#90CDF4";

const Board = ({ n, step }) => {
	const [board, setBoard] = useState(getBoard(n));
	const [hoveredQueen, setHoveredQueen] = useState(null);

	useEffect(() => {
		if (n > 2) setBoard(getBoard(n));
	}, [n]);

	const onHover = (i, j) => {
		if (columns[i] === j) setHoveredQueen([i, j, i + j, i + n - j]);
		else setHoveredQueen([i, j]);
	};

	const [columns, isValidPos, isValidBoard] = step;
	return (
		<>
			<Box
				marginX={70}
				width="55vmin"
				boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
			0 6.7px 5.3px rgba(0, 0, 0, 0.048),
			0 12.5px 10px rgba(0, 0, 0, 0.06),
			0 22.3px 17.9px rgba(0, 0, 0, 0.072),
			0 41.8px 33.4px rgba(0, 0, 0, 0.086),
			0 100px 80px rgba(0, 0, 0, 0.12)"
			>
				{board.map((row, i) => (
					<Flex flexDirection="row" key={i}>
						{row.map((_, j) => (
							<Center
								onMouseOver={() => onHover(i, j, columns)}
								onMouseOut={() => setHoveredQueen(null)}
								key={j}
								bg={
									isValidBoard && columns[i] === j
										? validColor
										: i === columns.length - 1 &&
										  j === columns[i]
										? isValidPos
											? validColor
											: invalidColor
										: hoveredQueen &&
										  hoveredQueen.length === 4 &&
										  (hoveredQueen[0] === i ||
												hoveredQueen[1] === j ||
												hoveredQueen[2] === i + j ||
												hoveredQueen[3] === i + n - j)
										? hoveredColor
										: i % 2
										? j % 2
											? "white"
											: blue
										: j % 2
										? blue
										: "white"
								}
								as="div"
								transition="ease 0.1s"
								height={`calc(55vmin / ${n})`}
								width={`calc(55vmin / ${n})`}
								color="black"
								fontSize={`calc(35vmin / ${n})`}
								border="1px solid #3182CE"
							>
								{columns[i] === j && <FaChessQueen />}
							</Center>
						))}
					</Flex>
				))}
			</Box>
		</>
	);
};

export default Board;
