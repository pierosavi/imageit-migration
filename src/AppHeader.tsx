import { Header, Text } from '@primer/components'

const AppHeader = () => {
	return(
		<Header>
			<Header.Item full>
				<Text paddingLeft={4} fontSize={4}>ImageIt Migration</Text>
			</Header.Item>
			<Header.Link href="https://github.com/pierosavi/imageit-migration/blob/master/README.md">
				<Text fontSize={4}>README &amp; FAQ</Text>
			</Header.Link>
		</Header>
	)
}

export default AppHeader;