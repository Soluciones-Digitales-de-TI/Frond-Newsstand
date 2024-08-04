import { Outlet } from "react-router-dom";
import Modal from 'react-modal'
import AdminSidebar from "../components/AdminSidebar";
import useQuiosco from '../hooks/useQuiosco'
import ModalAdminProducto from "../components/ModalAdminProducto";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root')

export default function AdminLayout() {

    useAuth({middleware: 'admin'});
    const { modal } = useQuiosco();

    return (
        <>
           <div className='md:flex'>
                <AdminSidebar />

                <main className='flex-1 h-screen overflow-y-scroll bg-gray-50 p-3'>
                    <Outlet />
                </main>
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalAdminProducto />
            </Modal> 
        </>
        
    )
}
