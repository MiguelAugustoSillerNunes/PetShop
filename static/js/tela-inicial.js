const agendamentos = [
    {
        id: 1,
        nome: 'Rex',
        especie: 'Cachorro',
        raca: 'Pastor Alemão',
        servico: 'Banho',
        data: '15/08/2025',
    },
    {
        id: 2,
        nome: 'Bobby',
        especie: 'Cachorro',
        raca: 'Labrador',
        servico: 'Tosa',
        data: '16/08/2025',
    },
    {
        id: 3,
        nome: 'Fido',
        especie: 'Cachorro',
        raca: 'Bulldog',
        servico: 'Consulta Veterinária',
        data: '17/08/2025',
    }
];

function preencherTabela() {
    const tableBody = document.getElementById('tabela-dados');
    
    for (let i = 0; i < agendamentos.length; i++) {
        const agendamento = agendamentos[i];
        const row = document.createElement('tr');

        row.innerHTML = `
            <th scope="row">${agendamento.id}</th>
            <td>${agendamento.nome}</td>
            <td>${agendamento.especie}</td>
            <td>${agendamento.raca}</td>
            <td>${agendamento.servico}</td>
            <td>${agendamento.data}</td>
            <td>
                <button class="btn-visualizar" data-toggle="tooltip" title="Excluir" style="margin-right: 10px;">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="btn-visualizar" data-toggle="tooltip" title="Visualizar">
                    <i class="fas fa-eye"></i> 
                </button>
            </td>
        `;

        // Adicionar a linha ao corpo da tabela
        tableBody.appendChild(row);
    }
}

// Chamar a função para preencher a tabela ao carregar a página
window.onload = preencherTabela;