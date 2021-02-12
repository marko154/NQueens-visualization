import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const javascript = `function solve(n, cls = [], ld = new Set(), rd = new Set(), cols = new Set()) {
	if (cls.length === n)
        return cls;
	else {
	    for (let i = 0; i < n; i++)
            if (
	            !cols.has(i) &&
	            !ld.has(cls.length + i) &&
	            !rd.has(cls.length + n - i)
            ) {
	            cols.add(i);
	            ld.add(cls.length + i);
	            rd.add(cls.length + n - i);
	            return solve(n, [...cls, i], ld, rd, cols);
	            cols.delete(i);
	            ld.delete(cls.length + i);
	            rd.delete(cls.length + n - i);
            } 
	}
}`;

const python = `def solve(n, cls=[], ld=set(), rd=set(), cols=set()):
	if len(cls) == n:
        return cls
	else:
	    for i in range(n): 
            if not i in cols and not len(cls) + i in cls and not len(cls) in rd: 
	            cols.add(i)
	            ld.add(len(cls) + i)
	            rd.add(len(cls) + n - i)
	            return solve(n, [*cls, i], ld, rd, cols)
	            cols.discard(i)
	            ld.discard(len(cls) + i)
	            rd.discard(len(cls) + n - i)
            
	
`;

const Code = () => (
	<Tabs variant="unstyled">
		<TabList paddingX="20px">
			<Tab _selected={{ color: "white", bg: "blue.500" }}>Javascript</Tab>
			<Tab _selected={{ color: "white", bg: "blue.500" }}>Python</Tab>
		</TabList>
		<TabPanels>
			<TabPanel>
				<SyntaxHighlighter
					language="javascript"
					style={a11yLight}
					showLineNumbers={true}
					editable="true"
				>
					{javascript}
				</SyntaxHighlighter>
			</TabPanel>
			<TabPanel>
				<SyntaxHighlighter
					language="python"
					style={a11yLight}
					showLineNumbers={true}
					editable="true"
				>
					{python}
				</SyntaxHighlighter>
			</TabPanel>
		</TabPanels>
	</Tabs>
);

export default Code;
