import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MaterialFiltros from '../components/Material/MaterialFiltros';
import MaterialContainer from '../components/Material/MaterialContainer';
import MaterialModal from '../components/Material/MaterialModal';

const materialsMock = [
  {
    id: 1,
    titulo: 'Relatório Projeto X',
    url: '',
    tipo: 'pdf',
    descricao: 'Versão final aprovada.',
    visibilidade: 'PUBLICO',
  },
  {
    id: 2,
    titulo: 'Slides Aula Clean Code',
    url: '',
    tipo: 'slide',
    descricao: '',
    visibilidade: 'PUBLICO',
  },
  {
    id: 3,
    titulo: 'Repositório Projeto Y',
    url: '',
    tipo: 'repo',
    descricao: '',
    visibilidade: 'PRIVADO',
  },
];

export default function LabMaterial() {
  const { labId, isMember, isAdmin } = useOutletContext();
  const [materiais, setMateriais] = useState([]);
  const [filters, setFilters] = useState({ q: '', tipo: 'all' });
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setMateriais(materialsMock);
  }, [labId]);

  const handleSave = (form) => {
    if (form.id) {
      setMateriais((prev) => prev.map((m) => (m.id === form.id ? form : m)));
    } else {
      setMateriais((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setModalOpen(false);
    setEditing(null);
  };

  const handleEdit = (item) => {
    setEditing(item);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const visibles = materiais
    .filter((m) => filters.tipo === 'all' || m.tipo === filters.tipo)
    .filter((m) => m.titulo.toLowerCase().includes(filters.q.toLowerCase()))
    .filter((m) => m.visibilidade === 'PUBLICO' || isMember);

  return (
    <div className="space-y-6">
      <MaterialFiltros
        filters={filters}
        setFilters={setFilters}
        isAdmin={isAdmin}
        onAdd={handleAdd}
      />
      <MaterialContainer items={visibles} isAdmin={isAdmin} onEdit={handleEdit} />
      <MaterialModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        initialData={editing}
      />
    </div>
  );
}
