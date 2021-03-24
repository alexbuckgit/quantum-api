---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.CreateQubitsAndApplyRzArcTan2
title: CreateQubitsAndApplyRzArcTan2 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: CreateQubitsAndApplyRzArcTan2
qsharp.summary: "Example of a Repeat-until-success algorithm implementing a circuit\rthat achieves exp(i⋅ArcTan(2)⋅Z) by Paetznick & Svore.\rThe exp(\U0001D456 ArcTan(2) \U0001D44D) operation is also known as the \"\U0001D449 gate.\""
---

# CreateQubitsAndApplyRzArcTan2 operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Example of a Repeat-until-success algorithm implementing a circuit

```qsharp
operation CreateQubitsAndApplyRzArcTan2 (inputValue : Bool, inputBasis : Pauli, limit : Int) : (Bool, Result, Int)
```


## Input

### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),__invalid<Result>__,[Int](xref:microsoft.quantum.lang-ref.int))



## Remarks

The program executes a circuit on a "target" qubit using an "auxiliary"

## References

- [ *Adam Paetznick, Krysta M. Svore*,