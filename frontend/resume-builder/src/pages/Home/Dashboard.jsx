import React, { useState, useEffect } from 'react';

const Databoard = () => {
  // สร้าง state สำหรับเก็บข้อมูล
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [totalIncome, setTotalIncome] = useState(0);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('all');
  
  // สร้างข้อมูลตั้งต้นเมื่อ component โหลด
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'สมชาย', income: 35000, tags: ['พนักงานประจำ', 'ฝ่ายขาย'] },
      { id: 2, name: 'สมหญิง', income: 42000, tags: ['พนักงานประจำ', 'ฝ่ายบัญชี'] },
      { id: 3, name: 'มานี', income: 28000, tags: ['พนักงานชั่วคราว', 'ฝ่ายขาย'] },
      { id: 4, name: 'มานะ', income: 50000, tags: ['ผู้จัดการ', 'ฝ่ายบุคคล'] },
      { id: 5, name: 'สมศรี', income: 38000, tags: ['พนักงานประจำ', 'ฝ่ายไอที'] },
    ];
    
    setData(initialData);
    setFilteredData(initialData);
    
    // คำนวณรายได้รวม
    const total = initialData.reduce((sum, person) => sum + person.income, 0);
    setTotalIncome(total);
    
    // หา tags ที่ไม่ซ้ำกัน โดยใช้ flatMap และ Set
    const allTags = initialData.flatMap(person => person.tags);
    const uniqueTagsSet = new Set(allTags);
    setUniqueTags([...uniqueTagsSet]);
  }, []);
  
  // ฟังก์ชันการค้นหา
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term === '') {
      // ถ้าไม่มีคำค้นหา แสดงข้อมูลทั้งหมดหรือข้อมูลตาม tag ที่เลือก
      filterByTag(selectedTag);
    } else {
      // ใช้ filter เพื่อค้นหาชื่อที่มีคำค้นหา
      const filtered = data.filter(person => 
        person.name.toLowerCase().includes(term.toLowerCase())
      );
      
      // กรองต่อตาม tag ที่เลือก (ถ้าไม่ใช่ 'all')
      setFilteredData(
        selectedTag === 'all' 
          ? filtered 
          : filtered.filter(person => person.tags.includes(selectedTag))
      );
    }
  };
  
  // ฟังก์ชันเรียงลำดับตามรายได้
  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    
    // ใช้ sort เพื่อเรียงลำดับข้อมูล
    const sorted = [...filteredData].sort((a, b) => {
      if (newOrder === 'asc') {
        return a.income - b.income;
      } else {
        return b.income - a.income;
      }
    });
    
    setFilteredData(sorted);
  };
  
  // ฟังก์ชันกรองตาม tag
  const filterByTag = (tag) => {
    setSelectedTag(tag);
    
    if (tag === 'all') {
      // ถ้าเลือก 'all' ให้แสดงทั้งหมด (หรือตามคำค้นหาถ้ามี)
      const filtered = searchTerm === '' 
        ? data 
        : data.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredData(filtered);
    } else {
      // กรองตาม tag และคำค้นหา (ถ้ามี)
      const filtered = data.filter(person => 
        person.tags.includes(tag) && 
        (searchTerm === '' || person.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredData(filtered);
    }
  };
  
  // ฟังก์ชันเพิ่มพนักงานใหม่
  const addRandomPerson = () => {
    const names = ['วิชัย', 'นารี', 'ประสิทธิ์', 'วิภา', 'อนันต์', 'สมพร'];
    const departments = ['ฝ่ายขาย', 'ฝ่ายบัญชี', 'ฝ่ายไอที', 'ฝ่ายการตลาด', 'ฝ่ายบุคคล'];
    const positions = ['พนักงานประจำ', 'พนักงานชั่วคราว', 'ผู้จัดการ', 'ที่ปรึกษา'];
    
    // สุ่มข้อมูลโดยใช้ Math.random
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomIncome = Math.floor(Math.random() * 30000) + 25000;
    const randomDept = departments[Math.floor(Math.random() * departments.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    
    // สร้างข้อมูลพนักงานใหม่
    const newPerson = {
      id: data.length + 1,
      name: randomName,
      income: randomIncome,
      tags: [randomPosition, randomDept]
    };
    
    // ใช้ spread operator เพื่อเพิ่มข้อมูลใหม่
    const updatedData = [...data, newPerson];
    setData(updatedData);
    
    // อัพเดท filteredData ตามเงื่อนไขปัจจุบัน
    if (selectedTag === 'all' || newPerson.tags.includes(selectedTag)) {
      if (searchTerm === '' || newPerson.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        setFilteredData([...filteredData, newPerson]);
      }
    }
    
    // อัพเดทรายได้รวม
    setTotalIncome(totalIncome + newPerson.income);
    
    // อัพเดท uniqueTags ด้วย Set
    const newTags = new Set([...uniqueTags, ...newPerson.tags]);
    setUniqueTags([...newTags]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">ระบบจัดการข้อมูลพนักงาน</h1>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="ค้นหาชื่อ..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <button
          onClick={handleSort}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          เรียงตามรายได้ {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
        
        <button
          onClick={addRandomPerson}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          เพิ่มพนักงานสุ่ม
        </button>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">กรองตามประเภท:</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => filterByTag('all')}
            className={`px-3 py-1 rounded ${selectedTag === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            ทั้งหมด
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => filterByTag(tag)}
              className={`px-3 py-1 rounded ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">สรุปข้อมูล:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="bg-blue-100 p-3 rounded">
            <div className="font-bold">จำนวนพนักงานทั้งหมด</div>
            <div className="text-2xl">{data.length} คน</div>
          </div>
          <div className="bg-green-100 p-3 rounded">
            <div className="font-bold">จำนวนที่แสดง</div>
            <div className="text-2xl">{filteredData.length} คน</div>
          </div>
          <div className="bg-yellow-100 p-3 rounded">
            <div className="font-bold">รายได้รวม</div>
            <div className="text-2xl">{totalIncome.toLocaleString()} บาท</div>
          </div>
        </div>
      </div>
      
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left border-b">ID</th>
            <th className="p-3 text-left border-b">ชื่อ</th>
            <th className="p-3 text-left border-b">รายได้</th>
            <th className="p-3 text-left border-b">ประเภท</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(person => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{person.id}</td>
              <td className="p-3 border-b">{person.name}</td>
              <td className="p-3 border-b">{person.income.toLocaleString()} บาท</td>
              <td className="p-3 border-b">
                <div className="flex flex-wrap gap-1">
                  {person.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {filteredData.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          ไม่พบข้อมูลที่ตรงกับเงื่อนไข
        </div>
      )}
    </div>
  );
};

export default Databoard;