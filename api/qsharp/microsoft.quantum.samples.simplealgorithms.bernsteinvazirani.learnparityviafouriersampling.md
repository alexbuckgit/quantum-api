---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani.LearnParityViaFourierSampling
title: LearnParityViaFourierSampling operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani
qsharp.name: LearnParityViaFourierSampling
qsharp.summary: "LearnParityViaFourierSampling implements the Bernstein-Vazirani quantum algorithm.\rThis algorithm computes for a given Boolean function that is promised to be\ra parity \U0001D453(\U0001D465₀, …, \U0001D465ₙ₋₁) = Σᵢ \U0001D45Fᵢ \U0001D465ᵢ a result in form of\ra bit vector (\U0001D45F₀, …, \U0001D45Fₙ₋₁) corresponding to the parity function.\rNote that it is promised that the function is actually a parity function."
---

# LearnParityViaFourierSampling operation

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


LearnParityViaFourierSampling implements the Bernstein-Vazirani quantum algorithm.

```qsharp
operation LearnParityViaFourierSampling (Uf : ((Qubit[], Qubit) => Unit), n : Int) : Bool[]
```


## Input

### Uf : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements |𝑥〉|𝑦〉 ↦ |𝑥〉|𝑦 ⊕ 𝑓(𝑥)〉,


### n : [Int](xref:microsoft.quantum.lang-ref.int)

The number of bits of the input register |𝑥〉.



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

An array of type `Bool[]` that contains the parity 𝑟⃗ = (𝑟₀, …, 𝑟ₙ₋₁).

## References

- [ *Ethan Bernstein and Umesh Vazirani*,

## See Also

- [For details see Section 1.4.3 of Nielsen & Chuang.](xref:For details see Section 1.4.3 of Nielsen & Chuang.)