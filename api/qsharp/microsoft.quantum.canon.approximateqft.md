---
uid: Microsoft.Quantum.Canon.ApproximateQFT
title: ApproximateQFT operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApproximateQFT
qsharp.summary: Apply the Approximate Quantum Fourier Transform (AQFT) to a quantum register.
---

# ApproximateQFT operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Apply the Approximate Quantum Fourier Transform (AQFT) to a quantum register.

```qsharp
operation ApproximateQFT (a : Int, qs : Microsoft.Quantum.Arithmetic.BigEndian) : Unit is Adj + Ctl
```


## Input

### a : [Int](xref:microsoft.quantum.lang-ref.int)

approximation parameter which determines at which level the controlled Z-rotations that


### qs : [BigEndian](xref:Microsoft.Quantum.Arithmetic.BigEndian)

quantum register of n qubits to which the Approximate Quantum Fourier Transform is applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

AQFT requires Z-rotation gates of the form 2π/2ᵏ and Hadamard gates.

## References

- [ *M. Roetteler, Th. Beth*,