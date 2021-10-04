import React, { useEffect, useState } from 'react';
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
} from '@material-ui/core';

const url = 'http://localhost:3001/tampilDaftar';

const Daftar = () => {
  const [lists, setList] = useState([]);

  const getDaftar = async () => {
    const response = await fetch(url);
    const lists = await response.json();
    setList(lists.values);
  };
  useEffect(() => {
    getDaftar();
  }, []);

  return (
    <Card>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nama Walikota</TableCell>
              <TableCell align="center">Foto Walikota</TableCell>
              <TableCell align="center">Nama Wakil Walikota</TableCell>
              <TableCell align="center">Foto Wakil Walikota</TableCell>
              <TableCell align="right">Tahun</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => {
              return (
                <TableRow key={list.id_daftar_walikota}>
                  <TableCell>{list.nama_walikota}</TableCell>
                  <TableCell align="center">{list.foto_walikota}</TableCell>
                  <TableCell align="center">
                    {list.nama_wakil_walikota}
                  </TableCell>
                  <TableCell align="center">
                    {list.foto_wakil_walikota}
                  </TableCell>
                  <TableCell align="right">{list.tahun}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Daftar;
