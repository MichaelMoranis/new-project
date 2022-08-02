import React, {useState} from "react";
import Grid from "../Grid";
import * as C from "./styles"

const Form = ({handleAdd, transactionList ,setTransactionList}) => {
   const [desc, setDesc] = useState("");
   const [amount, setAmount] = useState("");
   const [isExpense, setExpense] = useState(false);

   const generateID = () => Math.round(Math.random() * 1000);
   
   const handlSave = () => {
      if (!desc || !amount) {
         alert("Por favor, Informe a descrição e o valor !!")
         return;
      } else if (amount < 1) {
         alert("Esse valor não é permitido")
         return;
      }
      const transaction = {
         id: generateID(),
         desc: desc,
         amount: amount,
         expense: isExpense,
      };
      handleAdd(transaction);

      setDesc("");
      setAmount("");
   };

   return (
      <>
        <C.Container>
         <C.InputContent>
            <C.Label>Descrição</C.Label>
            <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}>
            </C.Input>
         </C.InputContent>
         <C.InputContent>
         <C.Label>Valor</C.Label>
         <C.Input 
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
         />
         </C.InputContent>
         <C.RadioGroup>
            <C.Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={() => setExpense(!isExpense)} 
            />
            <C.Label htmlFor="rIncome"> Entrada </C.Label>
            <C.Input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={() => setExpense(!isExpense)} 
            />     
            <C.Label htmlFor="rIncome"> Saida </C.Label>       
         </C.RadioGroup>
         <C.Button onClick={handlSave}>Adicionar</C.Button>
        </C.Container>
        <Grid itens={transactionList} setItens={setTransactionList} />
      </>
   )
}

export default Form;