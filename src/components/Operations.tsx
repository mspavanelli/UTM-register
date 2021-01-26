import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { formatCurrency } from '../utils/format'
import OperationEnum from '../utils/enum/Operation'

const Operations = () => {
  const formatMoney = formatCurrency()

  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Type</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td>01/01/2018</Td>
          <Td>{OperationEnum.DEPOSIT}</Td>
          <Td>{formatMoney(1642)}</Td>
        </Tr>
        <Tr>
          <Td>01/01/2019</Td>
          <Td>{OperationEnum.WITHDRAW}</Td>
          <Td>{formatMoney(18000)}</Td>
        </Tr>
        <Tr>
          <Td>01/01/2020</Td>
          <Td>{OperationEnum.DEPOSIT}</Td>
          <Td>{formatMoney(25000)}</Td>
        </Tr>
        <Tr>
          <Td>01/01/2021</Td>
          <Td>{OperationEnum.DEPOSIT}</Td>
          <Td>{formatMoney(39000)}</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default Operations
