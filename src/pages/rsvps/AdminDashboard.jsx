import React, { useEffect, useState } from "react";
import { Table, Input, Select, Button, Modal, message } from "antd";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";
import * as XLSX from "xlsx";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [attendanceFilter, setAttendanceFilter] = useState("");
  const [plusOneFilter, setPlusOneFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  // Admin login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("admin_auth") === "true"
  );
  const [showLogin, setShowLogin] = useState(!isLoggedIn);
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = () => {
    if (password === "dk2026") {
      localStorage.setItem("admin_auth", "true");
      setIsLoggedIn(true);
      setShowLogin(false);
      message.success("Login successful");
    } else {
      message.error("Incorrect password");
    }
  };

  // Logout Admin
  const logout = () => {
    localStorage.removeItem("admin_auth");
    message.success("Logged out");
    window.location.reload();
  };

  // Fetch RSVPs
  const fetchRSVPs = async () => {
    setLoading(true);
    const snap = await getDocs(collection(db, "rsvp"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRsvps(data);
    setFiltered(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) fetchRSVPs();
  }, [isLoggedIn]);

  // Search + Filter Logic
  const filterData = () => {
    let data = [...rsvps];

    if (searchText.trim()) {
      data = data.filter((item) =>
        item.fullName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (attendanceFilter) {
      data = data.filter((item) => item.attendance === attendanceFilter);
    }

    if (plusOneFilter) {
      data = data.filter((item) => item.plusOne === plusOneFilter);
    }

    setFiltered(data);
  };

  useEffect(() => {
    filterData();
  }, [searchText, attendanceFilter, plusOneFilter]);

  // Delete RSVP
  const deleteRSVP = (id) => {
    Modal.confirm({
      title: "Are you sure?",
      icon: <ExclamationCircleOutlined />,
      content: "This RSVP entry will be permanently deleted.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        await deleteDoc(doc(db, "rsvp", id));
        message.success("RSVP entry deleted");
        fetchRSVPs();
      },
    });
  };

  // Excel Download
  const downloadExcel = () => {
    const sheetData = filtered.map((item) => ({
      "Full Name": item.fullName,
      Attendance: item.attendance,
      "Plus One": item.plusOne,
      "Plus One Name": item.plusOneName || "",
      Dietary: item.dietary || "",
      Message: item.message || "",
      Date: item.createdAt ? item.createdAt.toString() : "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RSVPs");

    XLSX.writeFile(workbook, "RSVP_List.xlsx");
  };

  const columns = [
    { title: "Full Name", dataIndex: "fullName" },
    {
      title: "Attendance",
      dataIndex: "attendance",
      render: (v) => (v === "accept" ? "Accepts" : "Declines"),
    },
    { title: "Plus One", dataIndex: "plusOne" },
    { title: "Plus One Name", dataIndex: "plusOneName" },
    { title: "Dietary", dataIndex: "dietary" },
    { title: "Message", dataIndex: "message" },
    {
      title: "Delete",
      render: (_, record) => (
        <Button danger onClick={() => deleteRSVP(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      {/* LOGIN POPUP */}
      <Modal
        open={showLogin}
        title="Admin Login"
        closable={false}
        onOk={handleLogin}
        okText="Login"
      >
        <Input.Password
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>

      {/* Dashboard */}
      {isLoggedIn && (
        <div style={{ padding: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>RSVP Admin Dashboard</h1>
            <Button danger onClick={logout}>
              Logout
            </Button>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Search
              placeholder="Search by name..."
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 250 }}
            />

            <Select
              placeholder="Attendance"
              allowClear
              style={{ width: 180 }}
              onChange={(value) => setAttendanceFilter(value)}
            >
              <Option value="accept">Accept</Option>
              <Option value="decline">Decline</Option>
            </Select>

            <Select
              placeholder="Plus One"
              allowClear
              style={{ width: 180 }}
              onChange={(value) => setPlusOneFilter(value)}
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>

            <Button type="primary" onClick={downloadExcel}>
              Download Excel
            </Button>
          </div>

          <Table
            columns={columns}
            dataSource={filtered}
            loading={loading}
            rowKey="id"
            bordered
            pagination={{ pageSize: 10 }}
          />
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
