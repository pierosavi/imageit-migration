import { Header, Text } from '@primer/components'

const AppHeader = () => {
	return(
		<Header>
			<Header.Item>
				<Text fontSize={4}>ImageIt Migrator</Text>
			</Header.Item>
		</Header>
	)
}

export default AppHeader;