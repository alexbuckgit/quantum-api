---
uid: Microsoft.Quantum.Samples.BitFlipCode.CheckCanonBitFlipCodeCorrectsBitFlipErrors
title: CheckCanonBitFlipCodeCorrectsBitFlipErrors operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.BitFlipCode
qsharp.name: CheckCanonBitFlipCodeCorrectsBitFlipErrors
qsharp.summary: >-
  For each single-qubit bit-flip error on three qubits, this operation
  encodes R_x(π / 3) |0〉 into the bit-flip code and asserts that the
  code protects against that error.
---

# CheckCanonBitFlipCodeCorrectsBitFlipErrors operation

Namespace: [Microsoft.Quantum.Samples.BitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode)

Package: [BitFlipCode](https://nuget.org/packages/BitFlipCode)


For each single-qubit bit-flip error on three qubits, this operation

```qsharp
operation CheckCanonBitFlipCodeCorrectsBitFlipErrors () : Unit
```


## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation will fail when error correction fails