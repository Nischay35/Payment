import {useState} from 'react'
import {
  BgContainer,
  CreditCard,
  Payment,
  Heading,
  Container,
  Text,
  Number,
  Name,
  PaymentContainer,
  CardHeader,
  NumberInput,
  NameInput,
} from './styledComponents'
const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardName = event => {
    setCardName(event.target.value)
  }
  return (
    <BgContainer>
      <CreditCard>
        <Heading>CREDIT CARD</Heading>
        <Container data-testid="creditCard">
          <Number>{cardNumber}</Number>
          <Text>CARDHOLDER NAME</Text>
          <Name>{cardName.toUpperCase()}</Name>
        </Container>
      </CreditCard>
      <Payment>
        <PaymentContainer>
          <CardHeader>Payment Method</CardHeader>
          <NumberInput
            type="number"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />
          <NameInput
            type="text"
            value={cardName}
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </PaymentContainer>
      </Payment>
    </BgContainer>
  )
}
export default CreditCard
