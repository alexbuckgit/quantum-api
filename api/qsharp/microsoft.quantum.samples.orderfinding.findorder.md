---
uid: Microsoft.Quantum.Samples.OrderFinding.FindOrder
title: FindOrder operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.OrderFinding
qsharp.name: FindOrder
qsharp.summary: >-
  Implements the Order Finding algorithm as described in L.M.K. Vandersypen et al., PRL 85, 5452, 2000 (https://arxiv.org/abs/quant-ph/0007017).

  The input permutation has 2ⁿ elements.  Then the quantum circuit
  has 2n + 1 qubits, where the n + 1 upper qubits are used to create
  a superposition over 2ⁿ⁺¹ numbers, which represent the exponents
  of the permutation.  The permutation is called n + 1 times for exponents
  2⁰, 2¹, ..., 2ⁿ on the lower n qubits.  For each exponent, we update the
  permutation and compute a quantum circuit using reversible logic synthesis
  from the namespace `Microsoft.Quantum.Synthesis`.
  Finally, a QFT is applied to the upper qubits.
---

# FindOrder operation

Namespace: [Microsoft.Quantum.Samples.OrderFinding](xref:Microsoft.Quantum.Samples.OrderFinding)

Package: [OrderFinding](https://nuget.org/packages/OrderFinding)


Implements the Order Finding algorithm as described in L.M.K. Vandersypen et al., PRL 85, 5452, 2000 (https://arxiv.org/abs/quant-ph/0007017).

```qsharp
operation FindOrder (perm : Int[], input : Int) : Int
```


## Input

### perm : [Int](xref:microsoft.quantum.lang-ref.int)[]

The input permutation


### input : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Int](xref:microsoft.quantum.lang-ref.int)
